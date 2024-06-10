const express = require("express");
const agentRouter = express.Router();

const {
  fetchAllOrderByAgent,
  insertBank,
} = require("../controller/agentController");
const verifyToken = require("../middleware/auth");

agentRouter.get(
  "/api/fetchAllOrderByAgent",
  [verifyToken],
  fetchAllOrderByAgent
);
agentRouter.post("/api/insertBank", [verifyToken], insertBank);

module.exports = agentRouter;
