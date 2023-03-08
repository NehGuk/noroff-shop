import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout.jsx";
import Home from "./home/Home.jsx";
import Product from "./product/Product.jsx";
import Cart from "./cart/Cart.jsx";
import Contact from "./contact/Contact.jsx";

import NotFound from "./not-found/NotFound";
import CheckOut from "./checkout/CheckOut.jsx";
import CheckOutSuccess from "./checkout-success/CheckoutSuccess.jsx";


export default function AppRoutes() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="checkout-success" element={<CheckOutSuccess />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }