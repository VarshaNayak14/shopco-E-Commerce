import { useContext } from 'react';
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../../Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartCount,
    totalPrice
  } = useContext(CartContext);

  return (
    <div className="container my-5">

      <h1 className="text-center mb-4">
        My Cart ({cartCount})
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="row justify-content-center">

            {cartItems.map((item) => (

              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100 text-center position-relative">

                  {/* DELETE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      border: "none",
                      background: "transparent",
                      color: "red",
                      fontSize: "18px",
                      cursor: "pointer"
                    }}
                  >
                    <FaTrash />
                  </button>

                  {/* IMAGE */}
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '200px', objectFit: 'contain' }}
                  />

                  {/* CONTENT */}
                  <div className="card-body">

                    <h5>{item.name}</h5>

                    <p>₹{item.price}</p>

                    {/* QUANTITY */}
                    <div className="d-flex justify-content-center align-items-center gap-3">

                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>

                    </div>

                  </div>
                </div>
              </div>

            ))}

          </div>

          {/* TOTAL */}
          <div className="text-center mt-4">
            <h3>Total: ₹{totalPrice}</h3>
          </div>
        </>
      )}

    </div>
  );
};

export default Cart;