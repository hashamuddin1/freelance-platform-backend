const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        enum: ["pending", "completed"],
    },
    price: {
        type: Number,
        required: false,
        default: null,
    },
    description: {
        type: String,
        required: false,
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
    }
});

const orders = new mongoose.model("orders", orderSchema);

module.exports = { orders };
