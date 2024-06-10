const { orders } = require("../models/orderModel");
const { banks } = require("../models/bankModel");

const fetchAllOrderByAgent = async (req, res) => {
  try {
    const fetchOrders = await orders
      .find({ agentId: req.user._id })
      .populate({ path: "clientId", select: "fullName" });

    return res.status(200).send({
      success: true,
      message: "Order has been fetched Successfully",
      data: fetchOrders,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const insertBank = async (req, res) => {
  try {
    const insertBank = new banks({
      agentId: req.user._id,
    });

    await insertBank.save();

    return res.status(200).send({
      success: true,
      message: "Bank has been attached Successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const fetchOrderKPIbyAgent = async (req, res) => {
  try {
    const fetchPendingOrders = await orders
      .find({ agentId: req.user._id, status: "pending" })
      .select({ _id: 1 });

    const fetchCompletedOrders = await orders
      .find({ agentId: req.user._id, status: "completed" })
      .select({ _id: 1 });

    return res.status(200).send({
      success: true,
      message: "Order has been fetched Successfully",
      data: {
        pendingOrder: fetchPendingOrders.length,
        completedOrder: fetchCompletedOrders.length,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  fetchAllOrderByAgent,
  insertBank,
  fetchOrderKPIbyAgent,
};
