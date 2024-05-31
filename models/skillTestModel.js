const mongoose = require("mongoose");

const skilltestSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  optionA: {
    type: String,
    required: true,
  },
  optionB: {
    type: String,
    required: true,
  },
  optionC: {
    type: String,
    required: true,
  },
  rightAnswer: {
    type: String,
    required: true,
    enum: ["optionA", "optionB", "optionC"],
  },
});

const skilltests = new mongoose.model("skilltests", skilltestSchema);

module.exports = { skilltests };
