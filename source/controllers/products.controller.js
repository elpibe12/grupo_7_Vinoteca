const data = require("../modules/data");

module.exports = {
  product: (req, res) => {
    return res.render("./products/product", {
      title: "Cava Wines-Producto",
      styles: [
        "products/product-mobile",
        "products/product-tablet",
        "products/product-desktop",
      ],
      data: data,
    });
  },

  cart: (req, res) => {
    return res.render("./products/cart", {
      title: "Cava Wines-Carrito",
      styles: [
        "products/cart-mobile",
        "products/cart-tablet",
        "products/cart-desktop",
      ],
      data: data,
    });
  },

  search: (req, res) => {
    return res.render("./products/search", {
      title: "Cava Wines-Buscador",
      styles: [
        "/products/search-mobile",
        "/products/search-tablet",
        "/products/search-desktop",
      ],
      data: data,
    });
  },
};
