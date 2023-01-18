import React, { useState } from "react";

function Products() {
  const [like, setLike] = useState(0);

  function handleClick() {
    setLike(like + 1);
  }
  return (
    <>
      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-1 rounded ">
          <div class="col">
            <div class="card h-70 p-3 bg-opacity-10 border border-info border-start-4 rounded-end">
             
              <div class="card-body t-center">
                <h5 class="card-title">Card title</h5>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top rounded border" alt="shoe"/>
                <p className="card-text mt-1">description of the product</p>
                <a href="/cart" class="btn btn-primary m-1">
                  Add to cart
                </a>
                <button className="m-3 rounded border border-danger"  onClick={handleClick}> ❤️ {like}</button>
              </div>
            </div>
          </div>
          <div class="col">
          <div class="card h-70 p-3 bg-opacity-10 border border-info border-start-4 rounded-end">
             
             <div class="card-body t-center">
               <h5 class="card-title">Card title</h5>
               <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top rounded border" alt="shoe"/>
               <p className="card-text mt-1">description of the product</p>
               <a href="/cart" class="btn btn-primary m-1">
                 Add to cart
               </a>
               <button className="m-3 rounded border border-danger"  onClick={handleClick}> ❤️ {like}</button>
             </div>
           </div>
          </div>
          <div class="col">
          <div class="card h-70 p-3 bg-opacity-10 border border-info border-start-4 rounded-end">
             
             <div class="card-body t-center">
               <h5 class="card-title">Card title</h5>
               <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top rounded border" alt="shoe"/>
               <p className="card-text mt-1">description of the product</p>
               <a href="/cart" class="btn btn-primary m-1">
                 Add to cart
               </a>
               <button className="m-3 rounded border border-danger"  onClick={handleClick}> ❤️ {like}</button>
             </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
