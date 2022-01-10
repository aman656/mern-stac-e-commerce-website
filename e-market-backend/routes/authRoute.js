const router = require("express").Router();
const newUser = require("../Models/user");
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const user = new newUser({
    username: req.body.username,
    email: req.body.email,
    password: Cryptojs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    await user.save();
    res.status(200).send("user created successfully");
  } catch (err) {
    res.status(500).send("Fail in creating user.");
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const given = req.body.password;
  try {
    const userfind = await newUser.findOne({ email: req.body.email });
    !userfind && res.status(401).json("User not found");

    const hashedPassword = await Cryptojs.AES.decrypt(
      userfind.password,
      process.env.SECRET_KEY
    );
    hashedPassword.toString(Cryptojs.enc.Utf8) !== given &&
      res.status(401).json("Wrong Credentials");
    const { password, ...allother } = userfind._doc;
    const jwtToken = jwt.sign(
      {
        id: userfind._id,
        isAdmin: userfind.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "2d" }
    );
    res.status(200).json({ ...allother, jwtToken });
  } catch (err) {
    res.status(500).json("An error Ocurred");
  }
});

module.exports = router;
