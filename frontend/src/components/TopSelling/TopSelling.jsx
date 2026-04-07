import { useState } from "react";
import "./TopSelling.css";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Leather Jacket",
    price: 1999,
    rating: 5,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
  },
  {
    id: 2,
    name: "Formal Suit",
    price: 3499,
    rating: 5,
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
  },
  {
    id: 3,
    name: "Party Dress",
    price: 1499,
    rating: 4,
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
  },
  {
    id: 4,
    name: "Sneakers",
    price: 1299,
    rating: 4,
    img: "https://images.unsplash.com/photo-1528701800489-20be9c9a86a5"
  },
  {
    id: 5,
    name: "Denim Shirt",
    price: 999,
    rating: 4,
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    id: 6,
    name: "Hoodie",
    price: 1199,
    rating: 5,
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  },
  {
    id: 7,
    name: "Skirt",
    price: 899,
    rating: 4,
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d44"
  },
  {
    id: 8,
    name: "Kurta Set",
    price: 1599,
    rating: 5,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  },
  {
    id: 9,
    name: "Blazer",
    price: 1999,
    rating: 5,
    img: "https://images.unsplash.com/photo-1592878849122-6b9c1f07c4dc"
  },
  {
    id: 10,
    name: "Track Suit",
    price: 1399,
    rating: 4,
    img: "https://images.unsplash.com/photo-1593030103066-0093718efeb9"
  },
  {
    id: 11,
    name: "Casual Shirt",
    price: 799,
    rating: 4,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 12,
    name: "Sweater",
    price: 999,
    rating: 5,
    img: "https://images.unsplash.com/photo-1583744946564-b52d01e7f5c3"
  },
  {
    id: 13,
    name: "Coat",
    price: 2499,
    rating: 5,
    img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3"
  },
  {
    id: 14,
    name: "Shorts",
    price: 499,
    rating: 4,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 15,
    name: "Saree",
    price: 1999,
    rating: 5,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
  },
  {
    id: 16,
    name: "T-Shirt",
    price: 499,
    rating: 4,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
];

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="top-selling">
      <h2>Top Selling</h2>

      <div className="product-grid">
        {visibleProducts.map((item) => (
          <div className="card" key={item.id}>
            
            {/* Wishlist */}
            <div className="wishlist">
              <FaHeart />
            </div>

            <img src={`${item.img}?w=400`} alt={item.name} />

            <h4>{item.name}</h4>

            {/* Rating */}
            <div className="rating">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="price">₹{item.price}</p>

          </div>
        ))}
      </div>

      {/* View All */}
      <div className="view-all">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default TopSelling;