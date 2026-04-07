import "./Home.css";
import { Link } from "react-router-dom";
import Brands from "./Brands";
import NewArrivals from "../Newarrival/Newarrival";
import TopSelling from "../TopSelling/TopSelling";
import Categories from "../Categories/Categories";
import Testimonials from "../Testimonials/Testimonials";

function Home() {
  return (
    <>
    <div className="hero-container">

      {/* Image */}
      <img
        className="hero-img"
        src="https://img.freepik.com/free-photo/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise_482257-65537.jpg"
        alt=""
      />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          Discover <span>Your</span> Fashion
        </h1>

        <p>Shop the latest trends and upgrade your wardrobe today</p>

        {/* Buttons */}
        <div className="hero-buttons">
          <Link to="/shop">
            <button className="btn btn-warning">Shop Now</button>
          </Link>

          <Link to="/shop">
            <button className="btn btn-outline-light">View Trends</button>
          </Link>
        </div>

        {/* Stats (IMPORTANT: outside buttons) */}
        <div className="hero-stats">
          <div>
            <h2>200+</h2>
            <p>Brands</p>
          </div>
          <div>
            <h2>2000+</h2>
            <p>Products</p>
          </div>
          <div>
            <h2>30,000+</h2>
            <p>Customers</p>
          </div>
        </div>
      </div>

    </div>
     <Brands />
      <NewArrivals />
      <TopSelling />
      <Categories />
      <Testimonials />
</>
  );
}

export default Home;