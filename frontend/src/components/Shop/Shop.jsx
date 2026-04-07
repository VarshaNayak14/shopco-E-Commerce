import "./Shop.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";

function Shop() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="shop-container">
      <h2>Shop</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)} className="btn btn-dark">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;