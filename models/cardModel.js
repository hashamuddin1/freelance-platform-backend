const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
});

const cards = new mongoose.model("cards", cardSchema);

module.exports = { cards };
