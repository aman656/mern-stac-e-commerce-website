const router = require("express").Router();
const product = require("../Models/Product");
const { tokenAuthorizationandAdmin } = require("./tokenVerifying");

router.post("/", tokenAuthorizationandAdmin, async (req, res) => {
  const newproduct = new product(req.body);
  try {
    const pro = await newproduct.save();
    res.status(200).json(pro);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", tokenAuthorizationandAdmin, async (req, res) => {
  try {
    const update = await product.findByIdAndUpdate(
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
    await product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const getting = await product.findById(req.params.id);

    res.status(200).json(getting);
  } catch (err) {
    res.status(500).json("An Error Occured");
  }
});

router.get("/", async (req, res) => {
  const newItems = req.query.new;
  const category = req.query.category;
  try {
    let allItems;
    if (newItems) {
      allItems = await product.find().sort({ createdAt: -1 }).limit(5);
    } else if (category) {
      allItems = await product.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      allItems = await product.find();
    }
    res.status(200).json(allItems);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
