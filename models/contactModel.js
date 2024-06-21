const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
});

const contacts = new mongoose.model("contacts", contactSchema);

module.exports = { contacts };
