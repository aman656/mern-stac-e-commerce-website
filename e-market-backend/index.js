const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const stripeRoute = require("./routes/stripeRoute");
const cors = require("cors");

dotenv.config();
app.use(cors({ origin: "*", credentials: true, optionSuccessStatus: 200 }));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/stripe", stripeRoute);

app.listen(9000, () => {
  console.log("Server Running at 9000");
});
