// routes/orders.js
const express = require("express");
const router = express.Router();

// POST place order
router.post("/", (req, res) => {
  const { firstName, lastName, address, cart } = req.body;

  // Validate request body
  if (!firstName || !lastName || !address || !cart) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Simulate order placement
  console.log("Order placed:", { firstName, lastName, address, cart });

  // Respond with success message
  res.json({ message: "Order placed successfully" });
});

module.exports = router;
