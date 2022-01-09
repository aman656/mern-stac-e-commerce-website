const router = require("express").Router();
const {
  tokenAuthorization,
  tokenAuthorizationandAdmin,
} = require("./tokenVerifying");
const Cryptojs = require("crypto-js");
const newUser = require("../Models/user");

router.get("/test", (req, res) => {
  res.send("Tested successfully");
});

router.put("/:id", tokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = Cryptojs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await newUser.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", tokenAuthorization, async (req, res) => {
  try {
    await newUser.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json("Error Ocurred");
  }
});

router.get("/find/:id", tokenAuthorizationandAdmin, async (req, res) => {
  try {
    const user = await newUser.findById(req.params.id);
    const { password, ...allother } = user._doc;
    res.status(200).json(allother);
  } catch (err) {
    res.status(500).json("An Error Occured");
  }
});

router.get("/", tokenAuthorizationandAdmin, async (req, res) => {
  const query = req.query.value;
  try {
    const user = query
      ? await newUser.find().sort({ _id: -1 }).limit(1)
      : await newUser.find();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json("An Error Occured");
  }
});

router.get("/stats", tokenAuthorizationandAdmin, async (req, res) => {
  const currDate = new Date();
  const toFind = new Date(currDate.setFullYear(currDate.getFullYear() - 1));
  try {
    const data = await newUser.aggregate([
      { $match: { createdAt: { $gte: toFind } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
