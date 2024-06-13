const express = require("express");
const adminRouter = express.Router();

const {
  addSkillQuestion,
  getAllQuestion,
  getAllUsers,
  adminKPI,
  getAllOrder
} = require("../controller/adminController");

adminRouter.post("/api/addSkillQuestion", addSkillQuestion);
adminRouter.get("/api/getAllQuestion", getAllQuestion);
adminRouter.get("/api/getAllUsers", getAllUsers);
adminRouter.get("/api/adminKPI", adminKPI);
adminRouter.get("/api/getAllOrder", getAllOrder);

module.exports = adminRouter;
