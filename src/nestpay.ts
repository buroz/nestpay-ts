import https from "https";
import url from "url";

import { BankType, HashParameters, SecurePayment, CurrencyType, NonSecurePayment } from "./_interfaces";
import { SecureEndPoint, NonSecureEndPoint, Currencies } from "./_constants";
import { GenerateHash, CreateFormString, Obj2XML, XML2Json } from "./_utils";

export const RequestXMLRoot: string = "CC5Request";
export const ResponseXMLRoot: string = "CC5Response";

export class NestPay {
  constructor(private bank: BankType | string) {}

  private GenerateHash(hashParams: HashParameters): string {
    return GenerateHash(hashParams);
  }

  public Endpoint(secure: boolean): string {
    return secure ? SecureEndPoint.get(this.bank) : NonSecureEndPoint.get(this.bank);
  }

  private CreateFormString(obj: Record<string | number, string | number>): string {
    return CreateFormString(obj);
  }

  private CreateXmlString(obj: Record<string | number, string | number>): string {
    return Obj2XML(obj, RequestXMLRoot);
  }

  private Currency(currency: CurrencyType | string): number {
    return Currencies.get(currency);
  }

  public SecurePay(o: SecurePayment): string {
    const rnd = Date.now().toString();
    const hashParams = {
      clientId: o.clientId,
      orderId: o.orderId,
      totalAmount: o.totalAmount,
      okUrl: o.okUrl,
      failUrl: o.failUrl,
      islemtipi: o.type,
      rnd: rnd,
      storeKey: o.storeKey,
    };

    const formData = {
      Name: o.username,
      Password: o.password,
      ClientId: o.clientId,
      islemtipi: o.type,
      IPAddress: o.ipAddress,
      Oid: o.orderId,
      Email: o.email,
      Amount: o.totalAmount,
      Currency: this.Currency(o.currency),
      Pan: o.pan,
      OkUrl: o.okUrl,
      FailUrl: o.failUrl,
      Ecom_Payment_Card_ExpDate_Year: o.expYear.toString(),
      Ecom_Payment_Card_ExpDate_Month: o.expMonth.toString(),
      Lang: o.language,
      StoreType: "3D_PAY",
      // BillTo: o.billingInfo,
      // ShipTo: o.shippingInfo,
      // OrderItemList: o.items,
      Rnd: rnd,
    };

    if (o.instalment && o.instalment > 0) {
      Object.assign(hashParams, { instalment: o.instalment });
      Object.assign(formData, { Instalment: o.instalment });
    }

    return this.CreateFormString({ ...formData, Hash: this.GenerateHash(hashParams) });
  }

  public async NonSecurePay(o: NonSecurePayment): Promise<any> {
    const formData = {
      Name: o.username,
      Password: o.password,
      ClientId: o.clientId,
      Type: o.type,
      IPAddress: o.ipAddress,
      Oid: o.orderId,
      Email: o.email,
      Total: o.totalAmount,
      Currency: this.Currency(o.currency),
      Number: o.pan,
      Expires: `${o.expMonth.toString()}/${o.expYear.toString()}`,
      Cvv2Val: o.cvv,
      Lang: o.language,
      // BillTo: o.billingInfo,
      // ShipTo: o.shippingInfo,
      // OrderItemList: o.items,
    };

    if (o.instalment && o.instalment > 0) {
      Object.assign(formData, { Instalment: o.instalment });
    }

    const xml = this.CreateXmlString(formData);
    const banksUrl = url.parse(this.Endpoint(false));

    return new Promise(async (resolve, reject) => {
      const req = https.request(
        {
          hostname: banksUrl.hostname,
          port: 443,
          path: banksUrl.pathname,
          method: "POST",
          headers: {
            "Content-Type": "application/xml",
            "Content-Lenght": Buffer.byteLength(xml),
          },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk: Buffer) => (data += chunk));
          res.on("end", () => {
            const { CC5Response } = XML2Json(data);
            if (CC5Response.ProcReturnCode != "00") {
              reject(CC5Response);
            } else {
              resolve(CC5Response);
            }
            resolve(data);
          });
        }
      );
      req.write(xml);
      req.end();
      req.on("error", (err) => reject(err));
    });
  }
}
