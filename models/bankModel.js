const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
});

const banks = new mongoose.model("banks", bankSchema);

module.exports = { banks };
