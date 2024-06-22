const { orders } = require("../models/orderModel");
const { banks } = require("../models/bankModel");
const { ratings } = require("../models/ratingModel");

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

const totalEarningKPI = async (req, res) => {
  try {
    const fetchTotalEarning = await orders
      .find({ agentId: req.user._id })
      .select({ _id: 1, price: 1 });

    let sum = 0;
    for (let i = 0; i < fetchTotalEarning.length; i++) {
      sum += fetchTotalEarning[i].price;
    }

    return res.status(200).send({
      success: true,
      message: "Order has been fetched Successfully",
      data: sum,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const changeOrderStatus = async (req, res) => {
  try {
    await orders.updateOne({ _id: req.body.orderId }, { status: "completed" });
    return res.status(200).send({
      success: true,
      message: "Order has been completed Successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const fetchAllReviewsByAgent = async (req, res) => {
  try {
    const fetchReviews = await ratings
      .find({ agentId: req.user._id })
      .populate({ path: "clientId", select: "fullName" });

    return res.status(200).send({
      success: true,
      message: "Reviews has been fetched Successfully",
      data: fetchReviews,
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
  totalEarningKPI,
  changeOrderStatus,
  fetchAllReviewsByAgent,
};
