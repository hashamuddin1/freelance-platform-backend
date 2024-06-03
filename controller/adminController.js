const { skilltests } = require("../models/skillTestModel");
const { users } = require("../models/userModel");
require("dotenv").config();

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
    const fetchAllQuestion = await skilltests.find();

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
    const fetchAllUsers = await users.find()
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
}

module.exports = {
  addSkillQuestion,
  getAllQuestion,
  getAllUsers
};
