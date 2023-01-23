import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((items) => setProducts(items));
    // console.log(products);
  }, []);

  // incrementing like button
  const [like, setLike] = useState(0);
  function handleClick() {
    setLike(like + 1);
  }

  return (
    <>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 rounded ">
          {products &&
            products.map((product) => {
              return (
                <div className="col" key={product.id}>
                  <div className="card h-70 p-3 bg-opacity-10 border border-info border-start-4 rounded-end">
                    <div className="card-body t-center">
                      <h5 className="card-title">{product.title}</h5>
                      <img
                        src={product.imageUrl}
                        className="card-img-top rounded border"
                        alt="shoe"
                      />
                      <p className="card-text mt-1">{product.description}</p>
                      <p className="card-text mt-1">{product.seller}</p>
                      <p className="card-text mt-1">{product.amount}</p>
                      <a href="/cart" className="btn btn-primary m-1">
                        Add to cart
                      </a>
                      <button
                        className="m-3 rounded border border-danger"
                        onClick={handleClick}
                      >
                        ❤️ {like}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Products;
