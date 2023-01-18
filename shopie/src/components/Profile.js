import React from "react";

const user = {
  name: "Irene",
  imageUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  imageSize: "70px"
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          border: "1px solid blue",
          borderRadius: "30px",
          height: user.imageSize
        }}
      />


      <ul class="dropdown-menu">
      <ol>
          <a class="dropdown-item" href="/cart">
            Cart
          </a>
        </ol>
        <ol>
          <a class="dropdown-item" href="/logout">
            Logout
          </a>
        </ol>
      </ul>
      
    </>
  );
}

export default Profile;
