import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./rubikFonts/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import  CartProvider  from "./CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
);
