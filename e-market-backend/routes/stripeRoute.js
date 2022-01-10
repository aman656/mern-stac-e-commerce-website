const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(
  "sk_test_51KGOyoGMJUhLvwvj3pfrT5yRJVY50u739HhBDrM7UUTx6J7sv5c8SmUpaQnkKtVIW929637FgKPsZIn7GkymwRhc00MPG2cHUg"
);

router.post("/pay", async (req, res) => {
  try {
    await stripe.charges.create(
      {
        source: req.body.token,
        amount: req.body.amount,
        currency: "usd",
      },
      (error, response) => {
        if (error) {
          res.status(500).json(error);
        } else {
          res.status(200).json(response);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
