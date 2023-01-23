import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <a href="/">
          <h2 className="navheading">Shoppie App</h2>
        </a>

        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-a" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/aboutUs">About Us</a>
          </li>
          <li>
            <a href="/contactUs">Contact Us</a>
          </li>
          <div>
            <ul className="out-nav">
              <li>
                <a href="/cart">🛒</a>
              </li>
              <li>
                <a href="/profile">👤</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
