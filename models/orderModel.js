const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
  },
  price: {
    type: Number,
    required: true,
    default: null,
  },
  description: {
    type: String,
    required: true,
    default: null,
  },
  title: {
    type: String,
    required: true,
    default: null,
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

const orders = new mongoose.model("orders", orderSchema);

module.exports = { orders };
