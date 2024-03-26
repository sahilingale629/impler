// routes/products.js
const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");

// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Sample product data
const products = [
  {
    id: 1,
    name: "Black T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 10,
    image:
      "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
  },
  {
    id: 2,
    name: "Blue T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 20,
    image: "https://pngfre.com/wp-content/uploads/T-Shirt-2-1.png",
  },
  {
    id: 3,
    name: "Green T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 30,
    image: "https://pngimg.com/uploads/tshirt/tshirt_PNG5454.png",
  },

  {
    id: 4,
    name: "Violet T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 10,
    image:
      "https://spng.pngfind.com/pngs/s/29-297401_female-t-shirt-png-clip-art-black-t.png",
  },
  {
    id: 5,
    name: "Yellow T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 20,
    image: "https://pngfre.com/wp-content/uploads/T-Shirt-25-1-806x1024.png",
  },
  {
    id: 6,
    name: "Red T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 30,
    image:
      "https://e7.pngegg.com/pngimages/961/152/png-clipart-t-shirt-polo-shirt-sleeve-red-t-shirt-red-and-black-polo-shirt-tshirt-fashion-thumbnail.png",
  },
  {
    id: 7,
    name: "Blue T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 20,
    image:
      "https://www.freeiconspng.com/thumbs/blank-t-shirt-png/blank-t-shirt-png-9.png",
  },
  {
    id: 8,
    name: "Grey T-Shirt",
    description: "Flexible Fit and Comfortable Washable Fiber",
    price: 30,
    image: "https://freepngimg.com/thumb/tshirt/20-t-shirt-png-image-thumb.png",
  },
];

//GET all products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
