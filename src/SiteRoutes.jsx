import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import PageNotFound from "./Page/PageNotFound";
import { Category, Product, ProductLayout, Productss } from "./Products";
import Categoriess from "./Products/Categoriess";
import Login from "./Page/Login";
import PrivateRoute from "./PrivateRoute";
import Fav from "./Page/Fav";

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/*" element={<ProductLayout />}>
        <Route index={true} element={<Productss/>} />
        <Route path="category/:categoryName" element={<Category />} />
        <Route
          path="Products/:productId"
          element={<Product />}
        />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/fav" element={<PrivateRoute><Fav/></PrivateRoute>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
