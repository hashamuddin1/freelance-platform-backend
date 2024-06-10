const express = require("express");
const agentRouter = express.Router();

const {
  fetchAllOrderByAgent,
  insertBank,
  fetchOrderKPIbyAgent,
} = require("../controller/agentController");
const verifyToken = require("../middleware/auth");

agentRouter.get(
  "/api/fetchAllOrderByAgent",
  [verifyToken],
  fetchAllOrderByAgent
);
agentRouter.post("/api/insertBank", [verifyToken], insertBank);
agentRouter.get(
  "/api/fetchOrderKPIbyAgent",
  [verifyToken],
  fetchOrderKPIbyAgent
);

module.exports = agentRouter;
