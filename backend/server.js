const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Write data to cartData.json
app.post("/cart", (req, res) => {
  fs.writeFile("cartData.json", JSON.stringify(req.body, null, 2), (err) => {
    if (err) return res.status(500).send("Error saving cart data");
    res.send("Cart data saved");
  });
});

// Write data to wishlistData.json
app.post("/wishlist", (req, res) => {
  fs.writeFile("wishlistData.json", JSON.stringify(req.body, null, 2), (err) => {
    if (err) return res.status(500).send("Error saving wishlist data");
    res.send("Wishlist data saved");
  });
});

// Read cart data
app.get("/cart", (req, res) => {
  fs.readFile("cartData.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading cart");
    res.json(JSON.parse(data));
  });
});

// Read wishlist data
app.get("/wishlist", (req, res) => {
  fs.readFile("wishlistData.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading wishlist");
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
