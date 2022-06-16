import React from "react";
import { Route, Routes } from "react-router-dom";
import FilterComponents from "./Components/FilterComponents";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Products from "./Pages/Products";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/laptop/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
