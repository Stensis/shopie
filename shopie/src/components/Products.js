import React, { useState } from "react";

function Products() {
  const [like, setLike] = useState(0);

  function handleClick() {
    setLike(like + 1);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">One of three columns</div>
          <div className="col-4">One of three columns</div>
          <div className="col-4">One of three columns</div>
          
        </div>
        
      </div>

      {/* <div className="col-md-6">
        <div className="card">
          <img src="" class="card-img-top" alt="yoghurt" height="2rem" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">description of the product</p>

            <a href="/cart" class="btn btn-primary">
              Add to cart
            </a>
            <button onClick={handleClick}> ❤️ {like}</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Products;
