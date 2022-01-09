const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/pay", (req, res) => {
  stripe.charges.create(
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
});

module.exports = router;
