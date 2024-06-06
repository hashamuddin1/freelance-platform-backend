const { users } = require("../models/userModel");
const { orders } = require("../models/orderModel");
const { skilltests } = require("../models/skillTestModel");
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
            status: 'pending',
            price: req.body.price,
            agentId: req.body.agentId,
            clientId: req.user._id

        })

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


module.exports = {
    getAllAgents,
    getSingleAgent,
    assignOrder,
};
