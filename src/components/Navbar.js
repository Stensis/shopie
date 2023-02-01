import React, {useContext} from "react";
import { ItemsContext } from "../contexts/itemsContext";

function Navbar() {
  const {items, setItems} = useContext(ItemsContext);
  return (
    <>
      <div className="navbar">
        <a href="/">
          <h2 className="text-warning">Shoppie App</h2>
        </a>
        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-a text-warning" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-warning" href="/products">
              Products
            </a>
          </li>
          <li>
            <a className="text-warning" href="/aboutUs">
              About Us
            </a>
          </li>
          <li>
            <a className="text-warning" href="/contactUs">
              Contact Us
            </a>
          </li>
          <div>
            <ul className="out-nav">
              <li>
                <a className="text-warning" href="/cart">
                  🛒 {items.length === 0 ? "" : " " + items.length}
                </a>
              </li>
              <li>
                <a className="text-warning" href="/profile">
                  👤
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
