import "./Categories.css";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Casual",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    name: "Formal",
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
  },
  {
    name: "Party",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
  },
  {
    name: "Gym",
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
  }
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Browse by Dress Style</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <Link to={`/category/${item.name.toLowerCase()}`} key={index}>
            <div className="category-card">
              <img src={`${item.img}?w=500`} alt={item.name} />
              
              {/* Overlay */}
              <div className="category-overlay">
                <h3>{item.name}</h3>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;