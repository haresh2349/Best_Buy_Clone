import React from "react";
import { Route, Routes } from "react-router-dom";
import FilterComponents from "./Components/FilterComponents";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/filter" element={<FilterComponents />} /> */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
