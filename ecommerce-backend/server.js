// server.js
const express = require("express");
const cors = require("cors"); // Import the cors middleware
const bodyParser = require("body-parser");
const app = express();
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.use(bodyParser.json());
let orders = [];

// Routes
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.post("/place-order", (req, res) => {
  const { firstName, lastName, address } = req.body;
  if (firstName && lastName && address) {
    // Process the order
    const order = { firstName, lastName, address };
    orders.push(order);
    console.log("Order placed:", order);
    res.status(200).json({ message: "Order placed successfully!", order });
  } else {
    res
      .status(400)
      .json({ error: "First name, last name, and address are required." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
