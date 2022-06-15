const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server is running on LocalHost:" + port));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/index.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/register.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/login.html"))
);

app.get("/product", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/product.html"))
);

const public = path.resolve(__dirname, "../public");
app.use(express.static(public));
