import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout";
import FilterComponents from "./Components/FilterComponents";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/payment" element={<Checkout />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:category/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
