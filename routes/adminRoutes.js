const express = require("express");
const adminRouter = express.Router();

const {
  addSkillQuestion,
  getAllQuestion,
  getAllUsers,
  adminKPI,
} = require("../controller/adminController");

adminRouter.post("/api/addSkillQuestion", addSkillQuestion);
adminRouter.get("/api/getAllQuestion", getAllQuestion);
adminRouter.get("/api/getAllUsers", getAllUsers);
adminRouter.post("/api/adminKPI", adminKPI);

module.exports = adminRouter;
