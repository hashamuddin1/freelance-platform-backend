const express = require("express");
const clientRouter = express.Router();

const {
  getAllAgents,
  getSingleAgent,
  assignOrder,
  fetchAllOrderByClient,
  insertCard,
  fetchOrderKPIbyClient,
} = require("../controller/clientController");
const verifyToken = require("../middleware/auth");

clientRouter.get("/api/getAllAgents", [verifyToken], getAllAgents);
clientRouter.get("/api/getSingleAgent", [verifyToken], getSingleAgent);
clientRouter.post("/api/assignOrder", [verifyToken], assignOrder);
clientRouter.get("/api/fetchAllOrderByClient", [verifyToken], fetchAllOrderByClient);
clientRouter.post("/api/insertCard", [verifyToken], insertCard);
clientRouter.get(
  "/api/fetchOrderKPIbyClient",
  [verifyToken],
  fetchOrderKPIbyClient
);

module.exports = clientRouter;
