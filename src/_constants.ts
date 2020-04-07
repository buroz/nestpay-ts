import { BankType, CurrencyType } from "./_interfaces";

export const SecureEndPoint = new Map<BankType | string, string>();
export const NonSecureEndPoint = new Map<BankType | string, string>();
export const Currencies = new Map<CurrencyType | string, number>();

NonSecureEndPoint.set(BankType.ASSECO, "https://entegrasyon.asseco-see.com.tr/fim/api");
NonSecureEndPoint.set(BankType.FINANSBANK, "https://www.fbwebpos.com/fim/api");
NonSecureEndPoint.set(BankType.AKBANK, "https://www.sanalakpos.com/fim/api");
NonSecureEndPoint.set(BankType.DENIZBANK, "https://denizbank.est.com.tr/fim/api");
NonSecureEndPoint.set(BankType.KUVEYTTURK, "https://kuveytturk.est.com.tr/fim/api");
NonSecureEndPoint.set(BankType.HALKBANK, "https://sanalpos.halkbank.com.tr/fim/api");
NonSecureEndPoint.set(BankType.ANADOLUBANK, "https://anadolusanalpos.est.com.tr/fim/api");
NonSecureEndPoint.set(BankType.HSBC, "https://vpos.advantage.com.tr/fim/api");
NonSecureEndPoint.set(BankType.ZIRAATBANK, "https://sanalpos2.ziraatbank.com.tr/fim/api");
NonSecureEndPoint.set(BankType.ISBANK, "https://spos.isbank.com.tr/fim/api");

SecureEndPoint.set(BankType.ASSECO, "");
SecureEndPoint.set(BankType.FINANSBANK, "");
SecureEndPoint.set(BankType.AKBANK, "");
SecureEndPoint.set(BankType.DENIZBANK, "");
SecureEndPoint.set(BankType.KUVEYTTURK, "");
SecureEndPoint.set(BankType.HALKBANK, "");
SecureEndPoint.set(BankType.ANADOLUBANK, "");
SecureEndPoint.set(BankType.HSBC, "");
SecureEndPoint.set(BankType.ZIRAATBANK, "");
SecureEndPoint.set(BankType.ISBANK, "https://spos.isbank.com.tr/fim/est3Dgate");

Currencies.set(CurrencyType.EUR, 978);
Currencies.set(CurrencyType.TRY, 949);
Currencies.set(CurrencyType.USD, 840);
Currencies.set(CurrencyType.GBP, 826);
Currencies.set(CurrencyType.RUB, 643);
Currencies.set(CurrencyType.JPY, 392);
