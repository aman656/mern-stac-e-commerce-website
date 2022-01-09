const router = require("express").Router();
const Cart = require("../Models/Cart");
const { tokenAuthorizationandAdmin } = require("./tokenVerifying");

router.post("/", async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const pro = await newCart.save();
    res.status(200).json(pro);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const update = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", tokenAuthorizationandAdmin, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:userid", tokenAuthorizationandAdmin, async (req, res) => {
  try {
    const getting = await Cart.findOne({ userId: req.params.userid });

    res.status(200).json(getting);
  } catch (err) {
    res.status(500).json("An Error Occured");
  }
});

router.get("/", tokenAuthorizationandAdmin, async (req, res) => {
  try {
    const allcarts = await Cart.find();
    res.status(200).json(allcarts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
