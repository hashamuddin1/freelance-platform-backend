const express = require("express");
const adminRouter = express.Router();

const {
  addSkillQuestion,
  getAllQuestion,
  getAllUsers,
  adminKPI,
  getAllOrder,
  addContactForm,
  getAllContact
} = require("../controller/adminController");
const verifyToken = require("../middleware/auth");

adminRouter.post("/api/addSkillQuestion", addSkillQuestion);
adminRouter.get("/api/getAllQuestion", getAllQuestion);
adminRouter.get("/api/getAllUsers", getAllUsers);
adminRouter.get("/api/adminKPI", adminKPI);
adminRouter.get("/api/getAllOrder", getAllOrder);
adminRouter.post("/api/addContactForm",[verifyToken], addContactForm);
adminRouter.get("/api/getAllContact", getAllContact);

module.exports = adminRouter;
