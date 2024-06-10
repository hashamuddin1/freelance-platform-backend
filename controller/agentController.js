const { orders } = require("../models/orderModel");

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

module.exports = {
  fetchAllOrderByAgent,
};