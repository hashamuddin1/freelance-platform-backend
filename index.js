const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
require("./config/database");
const adminRouter = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");
const clientRouter = require("./routes/clientRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use([adminRouter, userRouter, clientRouter]);

app.listen(port, () => {
  console.log(
    `Our Server is running at port ${port} in Development Environment`
  );
});
