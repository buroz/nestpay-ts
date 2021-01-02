export enum CurrencyType {
  TRY = "TRY",
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  JPY = "JPY",
  RUB = "RUB",
}

export enum BankType {
  ASSECO = "asseco",
  FINANSBANK = "finansbank",
  VAKIFBANK = "vakifbank",
  AKBANK = "akbank",
  DENIZBANK = "denizbank",
  KUVEYTTURK = "kuveytturk",
  HALKBANK = "halkbank",
  ANADOLUBANK = "anadolubank",
  HSBC = "hsbc",
  ZIRAATBANK = "ziraatbank",
  ISBANK = "isbank",
}

export interface BillingInfo {
  name?: string;
  company?: string;
  street1?: string;
  street2?: string;
  street3?: string;
  city?: string;
  stateProv?: string;
  postalCode?: string;
  country?: string;
  telVoice?: string;
}

export interface ShippingInfo {
  name?: string;
  company?: string;
  street1?: string;
  street2?: string;
  street3?: string;
  city?: string;
  stateProv?: string;
  postalCode?: string;
  country?: string;
  telVoice?: string;
}

export interface OrderItemInfo {
  id?: string;
  itemNumber?: string;
  productCode?: string;
  qty?: string;
  desc?: string;
  price?: string;
  total?: string;
}

export interface HashParameters {
  clientId: string;
  orderId: string;
  totalAmount: string | number;
  okUrl: string;
  failUrl: string;
  islemtipi: "Auth" | "PreAuth" | "PostAuth" | "Void" | "Credit";
  instalment?: string | number;
  rnd: string | number;
  storeKey: string;
}

export interface SecurePayment {
  username: string;
  password: string;
  clientId: string;
  storeKey: string;
  type: "Auth" | "PreAuth" | "PostAuth" | "Void" | "Credit";

  orderId: string;
  currency: CurrencyType | string;
  language: "TR" | "EN";
  totalAmount: number;

  pan: string;
  expMonth: number;
  expYear: number;

  okUrl: string;
  failUrl: string;

  ipAddress?: string;
  email?: string;
  instalment?: string | number;
  billingInfo?: BillingInfo;
  shippingInfo?: ShippingInfo;
  items?: OrderItemInfo[];
}

export interface NonSecurePayment {
  username: string;
  password: string;
  clientId: string;
  type: "Auth" | "PreAuth" | "PostAuth" | "Void" | "Credit";

  orderId: string;
  currency: CurrencyType | string;
  language: "TR" | "EN";
  totalAmount: number;

  pan: string;
  expMonth: number;
  expYear: number;
  cvv: number;

  ipAddress?: string;
  email?: string;
  instalment?: string | number;
  billingInfo?: BillingInfo;
  shippingInfo?: ShippingInfo;
  items?: OrderItemInfo[];
}
