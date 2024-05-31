const express = require("express");
const userRouter = express.Router();

const {
  userSignUp,
  userSignIn,
  getUserProfile,
  completeProfile,
  getQuizQuestion
} = require("../controller/userController");
const verifyToken = require("../middleware/auth");

userRouter.post("/api/userSignUp", userSignUp);
userRouter.post("/api/userSignIn", userSignIn);
userRouter.get("/api/getUserProfile", [verifyToken], getUserProfile);
userRouter.post("/api/completeProfile", [verifyToken], completeProfile);
userRouter.post("/api/getQuizQuestion", [verifyToken], getQuizQuestion);

module.exports = userRouter;
