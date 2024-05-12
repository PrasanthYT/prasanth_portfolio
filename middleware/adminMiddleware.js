const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = { verifyToken };
