const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
});

const ratings = new mongoose.model("ratings", ratingSchema);

module.exports = { ratings };
