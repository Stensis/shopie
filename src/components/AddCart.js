//import React, { useState, useEffect } from "react";

function AddCart() {
  // const [item, setItem] = useState([]);
  let item = {};

  // useEffect(() => {
  //   fetch(`http://localhost:3000/products/${id}`)
  //     .then((res) => res.json())
  //     .then((item) => setItem(item));
  // }, []);

  return (
    <>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <div className="col">
              <div className="card h-70 p-3 bg-opacity-10 border border-info border-start-4 rounded-end">
                <div className="card-body t-center">
                  <img
                    src={item.imageUrl}
                    className="card-img-top rounded border"
                    alt="shoe"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="card-title mt-2 d-md-flex justify-content-md-center ">
              {item.title}
            </h1>

            <div>
              {" "}
              <p className="card-text mt-1">Description:{item.description}</p>
              <h4 className="subheading">Seller:{item.seller}</h4>
              <h4>Variation:{item.variation}</h4>
              <h4>Amount:{item.amount}</h4>
            </div>

            <div className="d-md-flex justify-content-md-center">
              <button type="button" className="btn btn-outline-warning m-1">
                -
              </button>

              <button type="button" className="btn btn-outline-success m-1">
                +
              </button>
            </div>

            <div className="d-md-flex justify-content-md-center">
              <button type="submit" className="btn btn-outline-warning m-1">
                <a href="/checkOut" className="mt-2 rounded">
                  <p>CheckOut({item.amount})</p>
                </a>
              </button>
            </div>

            <div className="d-md-flex justify-content-md-center">
              <button type="button" className="btn btn-outline-warning m-1">
                Remove Item
              </button>
              <li>
                <a
                  href="/wishlist"
                  className="d-md-flex justify-content-md-center"
                >
                  Add to Wishlist
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCart;
