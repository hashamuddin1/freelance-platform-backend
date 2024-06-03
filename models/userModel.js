const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    enum: ["agent", "client", "admin"],
  },
  fullName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: false,
    default: null,
  },
  skills: [
    {
      type: String,
      required: false,
    },
  ],
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
  experience: {
    type: Number,
    required: false,
    default: null,
  },
  isProfileCompleted: {
    type: Boolean,
    default: false,
  },
  isProfileVerified: {
    type: Boolean,
    default: false,
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = { users };
