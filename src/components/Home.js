import React from "react";
import "../App.css";

function Home() {
  return (
    <>
      <div
        className="carousel slide h"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
      >
      
        <div className="carousel-inner " style={{ height: "525px" }}>
          <div className="carousel-item active">
            <img
              alt="..."
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1630750796704-227a8a8af12b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <div className="carousel-caption">
              <h5>Write With Us!</h5>
              <p>
                Deepen readers understanding of the world and to empower writers
                to share their best work and biggest ideas.
              </p>
              {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1555529669-26f9d103abdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="carousel-caption">
              <h5>Authenticity</h5>
              <p>
                Deepen readers understanding of the world and to empower writers
                to share their best work and biggest ideas.
              </p>
              {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1630396592737-716bd8fc70a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80"
            />
            <div className="carousel-caption"style={{height:'525px'}}>
              <h5>True Champions</h5>
              <p>
                Deepen readers understanding of the world and to empower writers
                to share their best work and biggest ideas.
              </p>
              <p><a className="btn btn-warning mt-3" href="/product">Learn More</a>
                  </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home;
