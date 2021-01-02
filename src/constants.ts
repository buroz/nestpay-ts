import { BankType, CurrencyType } from "./interfaces";

export const SecureEndPoints = new Map<BankType | string, string>();
export const NonSecureEndPoints = new Map<BankType | string, string>();
export const Currencies = new Map<CurrencyType | string, number>();

NonSecureEndPoints.set(BankType.ASSECO, "https://entegrasyon.asseco-see.com.tr/fim/api");
NonSecureEndPoints.set(BankType.FINANSBANK, "https://www.fbwebpos.com/fim/api");
NonSecureEndPoints.set(BankType.AKBANK, "https://www.sanalakpos.com/fim/api");
NonSecureEndPoints.set(BankType.DENIZBANK, "https://denizbank.est.com.tr/fim/api");
NonSecureEndPoints.set(BankType.KUVEYTTURK, "https://kuveytturk.est.com.tr/fim/api");
NonSecureEndPoints.set(BankType.HALKBANK, "https://sanalpos.halkbank.com.tr/fim/api");
NonSecureEndPoints.set(BankType.ANADOLUBANK, "https://anadolusanalpos.est.com.tr/fim/api");
NonSecureEndPoints.set(BankType.HSBC, "https://vpos.advantage.com.tr/fim/api");
NonSecureEndPoints.set(BankType.ZIRAATBANK, "https://sanalpos2.ziraatbank.com.tr/fim/api");
NonSecureEndPoints.set(BankType.ISBANK, "https://spos.isbank.com.tr/fim/api");

SecureEndPoints.set(BankType.ASSECO, "");
SecureEndPoints.set(BankType.FINANSBANK, "");
SecureEndPoints.set(BankType.AKBANK, "");
SecureEndPoints.set(BankType.DENIZBANK, "");
SecureEndPoints.set(BankType.KUVEYTTURK, "");
SecureEndPoints.set(BankType.HALKBANK, "");
SecureEndPoints.set(BankType.ANADOLUBANK, "");
SecureEndPoints.set(BankType.HSBC, "");
SecureEndPoints.set(BankType.ZIRAATBANK, "");
SecureEndPoints.set(BankType.ISBANK, "https://spos.isbank.com.tr/fim/est3Dgate");

Currencies.set(CurrencyType.EUR, 978);
Currencies.set(CurrencyType.TRY, 949);
Currencies.set(CurrencyType.USD, 840);
Currencies.set(CurrencyType.GBP, 826);
Currencies.set(CurrencyType.RUB, 643);
Currencies.set(CurrencyType.JPY, 392);
