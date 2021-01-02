const express = require("express");
const https = require("https");
const url = require("url");
const NestPay = require("../dist");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/pay", (req, res) => {
  const nestpay = new NestPay("isbank");

  const endpoint = nestpay.Endpoint(true); // if Nonsecure payment set this false
  const banksUrl = url.parse(endpoint);
  const formStr = nestpay.SecurePay({
    username: "xxxxx",
    password: "xxxxx",
    clientId: "xxxxx",
    currency: "TRY",
    totalAmount: 0.1,
    instalment: 3,
    expMonth: 11,
    expYear: 22,
    failUrl: "http://localhost:8080/fail",
    okUrl: "http://localhost:8080/ok",
    orderId: "xxxxx",
    pan: "xxxxx",
    type: "Auth",
    storeKey: "xxx",
    language: "TR",
  });

  const paymentRequest = https.request(
    {
      hostname: banksUrl.hostname,
      port: 443,
      path: banksUrl.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Lenght": Buffer.from(formStr).length,
      },
    },
    (paymentResponse) => paymentResponse.pipe(res, { end: true })
  );
  paymentRequest.write(formStr);
  paymentRequest.end();
});

app.use("/fail", (req, res) => {
  console.log(req.body);
});

app.use("/ok", (req, res) => {
  console.log(req.body);
});

app.listen(8080);
