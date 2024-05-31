const express = require("express");
const adminRouter = express.Router();

const { addSkillQuestion, getAllQuestion } = require("../controller/adminController");

adminRouter.post("/api/addSkillQuestion", addSkillQuestion);
adminRouter.get("/api/getAllQuestion", getAllQuestion);

module.exports = adminRouter;
