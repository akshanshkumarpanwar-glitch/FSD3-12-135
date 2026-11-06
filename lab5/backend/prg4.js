javascript
import express from "express";
import products from "./data.js";

const app = express();

// Returns name, image, price and other product details
app.get("/api/products", (req, res) => {
  let sortedProducts = products.map(
    ({ description, reviews, ...rest }) => rest
  );

  res.status(200).json({
    count: sortedProducts.length,
    data: sortedProducts,
  });
});

// Returns a single product using its ID
app.get("/api/products/:pid", (req, res) => {
  const { pid } = req.params;

  const item = products.find((p) => p.id === Number(pid));

  if (!item) {
    return res.status(404).json({
      msg: `Product with id ${pid} not found`,
    });
  }

  res.status(200).json({
    data: item,
  });
});

// Handles invalid routes
app.use((req, res) => {
  res.status(404).send("<h1>Page not Found</h1>");
});

app.listen(4444, () => {
  console.log("Server is running at port no: 4444");
});