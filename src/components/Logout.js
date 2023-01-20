function Logout() {
  fetch("", {
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
      window.location = "/home";
    });
}

export default Logout;
