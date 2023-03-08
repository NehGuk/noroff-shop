import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./home/Home";
import Product from "./product/Product";
import Cart from "./cart/Cart.jsx";
import Contact from "./contact/Contact";


import NotFound from "./not-found/NotFound";

export default function AppRoutes() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }