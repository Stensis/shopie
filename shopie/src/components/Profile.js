import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) =>state.user.value);
  return (
    <>
      <div>
        <img
          className="avatar m-4"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            border: "1px solid blue",
            borderRadius: "40px",
            height: user.imageSize
          }}
        ></img>
        <div className="dropdown m-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Name:{user.name}
          </button>
          <ol className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/cart">
                Your Cart
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/logout">
                Logout
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/profile">
                Back ⬆️
              </a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Profile;
