const express = require("express");
const braintree = require("braintree");
const cors = require("cors");
const app = express();

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "72nbjdjvq5cdy9zs",
  publicKey: "nr9g2m64sz3d4rwf",
  privateKey: "39859e00058a8e4c3feaf979bf9d5762",
});

app.use(cors());

app.get("/client_token", (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    res.json(response.clientToken);
  });
});

app.post("/checkout", (req, res) => {
  const nonceFromTheClient = req.body.payment_method_nonce;
  gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: nonceFromTheClient,
    deviceData: deviceDataFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, (err, result) => {
    console.error(err);
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
