const express = require("express");
const { NestPay } = require("../dist");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/pay", async (req, res) => {
  const nestpay = new NestPay("isbank");
  try {
    const paymentResponse = await nestpay.NonSecurePay({
      username: "xxxxx",
      password: "xxxxx",
      clientId: "xxxxx",
      currency: "TRY",
      totalAmount: 0.1,
      instalment: 3,
      expMonth: 11,
      expYear: 22,
      cvv: 333,
      orderId: "xxxxx",
      pan: "xxxxx",
      type: "Auth",
      language: "TR",
    });
    res.send(paymentResponse);
  } catch (err) {
    console.log(err);
    res.send("fail");
  }
});

app.listen(8080);
