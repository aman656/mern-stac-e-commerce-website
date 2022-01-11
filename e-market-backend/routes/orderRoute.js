const router = require("express").Router();
const Order = require("../Models/Order");
const { tokenAuthorizationandAdmin } = require("./tokenVerifying");

router.post("/", tokenAuthorizationandAdmin, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const pro = await newOrder.save();
    res.status(200).json(pro);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", tokenAuthorizationandAdmin, async (req, res) => {
  try {
    const update = await Order.findByIdAndUpdate(
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
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:userid", async (req, res) => {
  try {
    const getting = await Order.find({ userid: req.params.userid });

    res.status(200).json(getting);
  } catch (err) {
    res.status(500).json("An Error Occured");
  }
});

router.get("/", async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/earn", tokenAuthorizationandAdmin, async (req, res) => {
  const date = new Date("Feb 11, 2022 01:15:00");
  const previousmonth = new Date(date.setMonth(date.getMonth() - 1));
  const aurprevious = new Date(
    new Date().setMonth(previousmonth.getMonth() - 1)
  );
  try {
    const earning = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: aurprevious,
          },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(earning);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
