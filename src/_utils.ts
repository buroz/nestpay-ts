import crypto from "crypto";
import qs from "querystring";
import XmlParser, { j2xParser } from "fast-xml-parser";
import { HashParameters } from "_interfaces";

const parser = new j2xParser({
  ignoreAttributes: true,
  indentBy: "  ",
});

export function Obj2XML(obj: any, rootName: string): string {
  const XML = parser.parse(obj);
  return `<?xml version="1.0" encoding="UTF-8"?><${rootName}>${XML}</${rootName}>`;
}

export function XML2Json(xml: string): any {
  return XmlParser.parse(
    xml,
    {
      ignoreAttributes: true,
      ignoreNameSpace: false,
      allowBooleanAttributes: false,
      parseNodeValue: true,
      parseAttributeValue: false,
      trimValues: true,
      parseTrueNumberOnly: false,
      arrayMode: false,
    },
    true
  );
}

export function GenerateHash(input: HashParameters): string {
  return crypto
    .createHash("sha1")
    .update(
      [
        input.clientId,
        input.orderId,
        input.totalAmount,
        input.okUrl,
        input.failUrl,
        input.islemtipi,
        input.instalment ? input.instalment : "",
        input.rnd,
        input.storeKey,
      ].join("")
    )
    .digest("base64");
}

export function CreateFormString(obj: Record<string | number, string | number>): string {
  return qs.stringify(obj);
}
