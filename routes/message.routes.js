const express = require("express");
const Message = require("../models/messageSchema");
const messageRouter = express.Router();

messageRouter.post("/api/messages", async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, message, date } = req.body;

    // Create a new message instance
    const newMessage = new Message({
      name,
      email,
      message,
      date,
    });

    await newMessage.save();

    res
      .status(201)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

messageRouter.get("/api/messages/get", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = messageRouter;
