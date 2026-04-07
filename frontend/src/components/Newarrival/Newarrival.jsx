import { useState } from "react";
import "./Newarrival.css";

const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: 499,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 1299,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 999,
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
  },
  {
    id: 4,
    name: "Blue Jeans",
    price: 1099,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d"
  },
  {
    id: 5,
    name: "Formal Shirt",
    price: 799,
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    id: 6,
    name: "Hoodie",
    price: 1199,
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  },
  {
    id: 7,
    name: "Women Top",
    price: 599,
    img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc"
  },
  {
    id: 8,
    name: "Skirt",
    price: 899,
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d44"
  },
  {
    id: 9,
    name: "Blazer",
    price: 1599,
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
  },
  {
    id: 10,
    name: "Kurti",
    price: 699,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  },
  {
    id: 11,
    name: "Shorts",
    price: 499,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 12,
    name: "Sweater",
    price: 999,
    img: "https://images.unsplash.com/photo-1583744946564-b52d01e7f5c3"
  },
  {
    id: 13,
    name: "Coat",
    price: 1999,
    img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3"
  },
  {
    id: 14,
    name: "Track Pant",
    price: 799,
    img: "https://images.unsplash.com/photo-1593030103066-0093718efeb9"
  },
  {
    id: 15,
    name: "Suit",
    price: 2499,
    img: "https://images.unsplash.com/photo-1592878849122-6b9c1f07c4dc"
  },
  {
    id: 16,
    name: "Saree",
    price: 1499,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
  },
];

const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>

      <div className="product-grid">
        {visibleProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;