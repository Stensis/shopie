import React from "react";

function Navbar() {
  return (
    <>
      <div class="navbar">
        {/* <a href="/home"> */}
        <h2>Shoppie App</h2>
        {/* </a> */}

        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-a" href="/home">
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
        </ul>

        <ol>
          <li>
            <a href="/cart">🛒</a>
          </li>
          <li>
            <a href="/profile">👤</a>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Navbar;
