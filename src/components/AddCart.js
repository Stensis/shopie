import { useContext } from "react";
import { ItemsContext } from "../contexts/itemsContext";

function AddCart() {
  // console.log(items)
  const { items, setItems } = useContext(ItemsContext);
  console.log(items)
  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/products/${id}`)
  //     .then((res) => res.json())
  //     .then((item) => setItem(item));
  // }, []);

  return (
    <>
      <div>
        <h2 className="bg-black mt-2 p-2 text-center rounded border border-warning">
          Your Order
        </h2>
        {items &&
          items.map((item) => {
            return(
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <h4> Name: {" " + item.title}</h4>
                  <img src="/" alt="" />
                </div>
                <div className="col text-center">
                  <div className="input-group w-50">
                    <button className="w-25 bg-info rounded" type="button">
                      -
                    </button>
                    <input
                      type="text"
                      className="form-control border border-warning text-dark"

                      // aria-label="Example text with two button addons"
                    />
                    <button className="w-25 bg-info rounded" type="button">
                      +
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Ksh:</span>
                    <span className="input-group-text">{item.price}</span>
                  </div>
                </div>
                <div className="col">
                  <button type="button" className="rounded bg-danger">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )})}
        <div className="bg-black mt-2 p-2 text-center rounded border border-warning">
          <div className="row">
            <div className="col-5  align-self-start">
              <h4>Total:</h4>
            </div>
            <div className="col align-self-center">
              <span className="input">Amount: </span>
              <span className="input">0.00</span>
            </div>
            <div className="col align-self-end">
              <button className="bg-success rounded">Place order</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="how-section1">
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
      </div> */}
    </>
  );
}

export default AddCart;
