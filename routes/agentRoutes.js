const express = require("express");
const agentRouter = express.Router();

const { fetchAllOrderByAgent } = require("../controller/agentController");
const verifyToken = require("../middleware/auth");

agentRouter.get(
  "/api/fetchAllOrderByAgent",
  [verifyToken],
  fetchAllOrderByAgent
);

module.exports = agentRouter;
