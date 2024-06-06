const express = require("express");
const userRouter = express.Router();

const {
  userSignUp,
  userSignIn,
  getUserProfile,
  completeProfile,
  getQuizQuestion,
  submitQuiz
} = require("../controller/userController");
const verifyToken = require("../middleware/auth");

userRouter.post("/api/userSignUp", userSignUp);
userRouter.post("/api/userSignIn", userSignIn);
userRouter.get("/api/getUserProfile", [verifyToken], getUserProfile);
userRouter.post("/api/completeProfile", [verifyToken], completeProfile);
userRouter.get("/api/getQuizQuestion", [verifyToken], getQuizQuestion);
userRouter.post("/api/submitQuiz", [verifyToken], submitQuiz);

module.exports = userRouter;
