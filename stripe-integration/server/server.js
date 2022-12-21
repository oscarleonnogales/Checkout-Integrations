const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MHZUKKyyfImt4OsE1Hc5QFzCvP9kUhkrdYTaq6MrUC61TiVIruBoL2yF5EJL44MFRRbzvZnkEklTh66eTwrRTYh002CAKmLNZ"
);

app.use(cors());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "MacBook Plus Accessories ",
            },
            unit_amount: 1780,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173",
      cancel_url: "http://localhost:5173",
    });
    res.json({ message: "Payment Successful" });
  } catch (err) {
    res.json({ error: err });
  }
});

app.listen(3000, () => console.log(`Listening on port ${3000}!`));
