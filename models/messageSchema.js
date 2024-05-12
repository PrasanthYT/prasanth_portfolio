const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: String,
});

// Create a model for messages
const Message = mongoose.model("messages", messageSchema);

module.exports = Message;
