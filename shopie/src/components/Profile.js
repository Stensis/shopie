import React from "react";

const user = {
  name: "Irene njuguna",
  imageUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  imageSize: "70px"
};

function Profile() {
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
            {user.name}
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
