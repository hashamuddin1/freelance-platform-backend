const { skilltests } = require("../models/skillTestModel");
const { users } = require("../models/userModel");
const { orders } = require("../models/orderModel");
const { contacts } = require("../models/contactModel");
require("dotenv").config();

const addContactForm = async (req, res) => {
  try {
    const insertContact = new contacts({
      description: req.body.description,
      title: req.body.title,
      userId: req.user._id,
    });

    await insertContact.save();

    return res.status(200).send({
      success: true,
      message: "Contact Added Successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getAllContact = async (req, res) => {
  try {
    const fetchAllContact = await contacts
      .find()
      .populate({ path: "userId", select: "fullName emailAddress" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Fetch All Contact Successfully",
      data: fetchAllContact,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const addSkillQuestion = async (req, res) => {
  try {
    const insertSkill = new skilltests({
      question: req.body.question,
      optionA: req.body.optionA,
      optionB: req.body.optionB,
      optionC: req.body.optionC,
      rightAnswer: req.body.rightAnswer,
    });

    await insertSkill.save();

    return res.status(200).send({
      success: true,
      message: "Question Added Successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getAllQuestion = async (req, res) => {
  try {
    const fetchAllQuestion = await skilltests.find().sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Question Fetch Successfully",
      data: fetchAllQuestion,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const fetchAllUsers = await users
      .find({
        role: { $ne: "admin" },
        isProfileVerified: true,
        isProfileCompleted: true,
      })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Fetch All Users Successfully",
      data: fetchAllUsers,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const adminKPI = async (req, res) => {
  try {
    const fetchAllAgent = await users
      .find({ role: "agent", isProfileVerified: true })
      .select({ _id: 1 });
    const fetchAllClient = await users
      .find({ role: "client", isProfileCompleted: true })
      .select({ _id: 1 });
    const fetchAllOrder = await orders.find().select({ _id: 1 });
    const fetchAllCompletedOrder = await orders
      .find({ status: "completed" })
      .select({ _id: 1 });
    const fetchAllPendingOrder = await orders
      .find({ status: "pending" })
      .select({ _id: 1 });
    const fetchAllIssue = await contacts.find().select({ _id: 1 });

    return res.status(200).send({
      success: true,
      message: "Fetch KPI Successfully",
      data: {
        fetchAllAgent: fetchAllAgent.length,
        fetchAllClient: fetchAllClient.length,
        fetchAllOrder: fetchAllOrder.length,
        fetchAllCompletedOrder: fetchAllCompletedOrder.length,
        fetchAllPendingOrder: fetchAllPendingOrder.length,
        fetchAllIssue: fetchAllIssue.length,
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

const getAllOrder = async (req, res) => {
  try {
    const fetchAllOrders = await orders
      .find()
      .populate({ path: "agentId", select: "fullName" })
      .populate({ path: "clientId", select: "fullName" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Fetch All Orders Successfully",
      data: fetchAllOrders,
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
  addSkillQuestion,
  getAllQuestion,
  getAllUsers,
  adminKPI,
  getAllOrder,
  addContactForm,
  getAllContact,
};
