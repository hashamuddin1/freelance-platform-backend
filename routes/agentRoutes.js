const express = require("express");
const agentRouter = express.Router();

const {
  fetchAllOrderByAgent,
  insertBank,
  fetchOrderKPIbyAgent,
  totalEarningKPI,
  changeOrderStatus
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
agentRouter.get(
  "/api/totalEarningKPI",
  [verifyToken],
  totalEarningKPI
);
agentRouter.put(
  "/api/changeOrderStatus",
  [verifyToken],
  changeOrderStatus
);

module.exports = agentRouter;
