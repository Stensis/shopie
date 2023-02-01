import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ItemsContext } from "./contexts/itemsContext";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import Products from "./components/Products";
import AddCart from "./components/AddCart";
import Profile from "./components/Profile";
import CheckOut from "./components/CheckOut";
import Logout from "./components/Logout";
import Wishlist from "./components/Wishlist";

function App() {
  // product state
  const [items, setItems] = useState([]);

  

  return (
    <>
      <ItemsContext.Provider value={{ items, setItems }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="/cart" element={<AddCart />} />

          <Route path="/checkOut" element={<CheckOut />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/logout" element={<Logout />} />

          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </ItemsContext.Provider>
    </>
  );
}

export default App;
