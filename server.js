const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { startDatabase, isConnected } = require("./config/db");
const messageRouter = require("./routes/message.routes");
const adminRouter = require("./routes/admin.login.routes");

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(messageRouter);
app.use(adminRouter);

app.get("/", (req, res) => {
  const databaseStatus = isConnected() ? "connected" : "disconnected";
  const message = isConnected()
    ? "Welcome to Prasanth Portfolio!"
    : `Oops! It seems like there's an issue with the database connection. We're working to resolve it as soon as possible. Please check back later.`;

  res.json({
    message: message,
    database: databaseStatus,
  });
});

// Start the server
app.listen(port, async () => {
  await startDatabase();
  console.log(`🚀 Server running on PORT: ${port}`);
});
