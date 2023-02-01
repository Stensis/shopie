import React, { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../contexts/itemsContext";

function Products() {
  const [products, setProducts] = useState([]);
  const {items, setItems} = useContext(ItemsContext);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((items) => setProducts(items));
    // console.log(products);
  }, []);

  // incrementing like button
  const [like, setLike] = useState(0);
  function handleClick() {
    setLike(like + 1);
  }

  // add product to cart
  const handleAddToCartArray = (product)=>{
    setItems([
      ...items,
      product
    ]);
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
                      <h5 className="card-title">
                        <>Name:</> {product.title}
                      </h5>
                      <img
                        src={product.imageUrl}
                        className="card-img-top rounded border"
                        alt="shoe"
                      />
                      <h5 className="card-text mt-1">
                        Description: {product.description}
                      </h5>
                      <h6 className="card-text mt-1">
                        Seller: {product.seller}
                      </h6>
                      <p className="card-text mt-1">Amount: Kshs. {product.amount}</p>
                      {/* <a href="/cart" className="btn btn-primary m-1">
                        Add to cart
                      </a> */}
                      <button
                        className="btn btn-primary m-1"
                        onClick={() =>
                          handleAddToCartArray(product)
                        }
                      >
                        <span> add to cart</span>
                      </button>
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
