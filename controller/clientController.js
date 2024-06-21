const { users } = require("../models/userModel");
const { orders } = require("../models/orderModel");
const { cards } = require("../models/cardModel");
const { ratings } = require("../models/ratingModel");
require("dotenv").config();

const getAllAgents = async (req, res) => {
    try {
        const fetchAllUsers = await users.find({ role: "agent" })
        return res.status(200).send({
            success: true,
            message: "Fetch All Agents Successfully",
            data: fetchAllUsers,
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send({
            success: false,
            message: "Something went wrong",
        });
    }
}

const getSingleAgent = async (req, res) => {
    try {
        const fetchAllUsers = await users.findOne({ _id: req.query.agentId })
        return res.status(200).send({
            success: true,
            message: "Fetch Agent Successfully",
            data: fetchAllUsers,
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send({
            success: false,
            message: "Something went wrong",
        });
    }
}

const assignOrder = async (req, res) => {
    try {
        const insertOrder = new orders({
            status: "pending",
            price: req.body.price,
            agentId: req.body.agentId,
            clientId: req.user._id,
            title: req.body.title,
            description: req.body.description,
        });

        await insertOrder.save()
        return res.status(200).send({
            success: true,
            message: "Order has been assigned Successfully",
        });

    } catch (e) {
        console.log(e);
        return res.status(400).send({
            success: false,
            message: "Something went wrong",
        });
    }
}

const fetchAllOrderByClient = async (req, res) => {
    try {
        const fetchOrders = await orders.find({ clientId: req.user._id }).populate({ path: "agentId", select: "fullName" })

        return res.status(200).send({
            success: true,
            message: "Order has been fetched Successfully",
            data: fetchOrders
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send({
            success: false,
            message: "Something went wrong",
        });
    }
}

const insertCard = async (req, res) => {
    try {
        const insertCard = new cards({
            clientId: req.user._id
        })

        await insertCard.save()

        return res.status(200).send({
            success: true,
            message: "Card has been attached Successfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send({
            success: false,
            message: "Something went wrong",
        });
    }
}

const fetchOrderKPIbyClient = async (req, res) => {
  try {
    const fetchPendingOrders = await orders
      .find({ clientId: req.user._id, status: "pending" })
      .select({ _id: 1 });

    const fetchCompletedOrders = await orders
      .find({ clientId: req.user._id, status: "completed" })
      .select({ _id: 1 });

    return res.status(200).send({
      success: true,
      message: "Order has been fetched Successfully",
      data: {
        totalOrder: fetchPendingOrders.length + fetchCompletedOrders.length,
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

const giveRatings = async (req, res) => {
    try {
        const insertRating = new ratings({
            agentId: req.body.agentId,
            clientId: req.user._id,
            rate: req.body.rate,
            description: req.body.description,
        });

        await insertRating.save()
        return res.status(200).send({
            success: true,
            message: "Review has been given Successfully",
        });

    } catch (e) {
        console.log(e);
        return res.status(400).send({
            success: false,
            message: "Something went wrong",
        });
    }
}

module.exports = {
  getAllAgents,
  getSingleAgent,
  assignOrder,
  fetchAllOrderByClient,
  insertCard,
  fetchOrderKPIbyClient,
  giveRatings
};
