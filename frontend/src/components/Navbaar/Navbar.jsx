import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Navbar.css";
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchText);
  };

  return (
    <nav className="navbar">
      {/* LEFT: Hamburger + Logo */}
      <div className="nav-left">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="logo">ShopCo</div>
      </div>

      {/* CENTER: Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* RIGHT: Search + Icons + SignUp */}
      <div className="nav-icons">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit"><FaSearch /></button>
        </form>

        <div className="header-icons">
          <FaHeart className="icon" title="Wishlist" />
          <Link to="/cart" className="icon cart-icon">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <FaUser className="icon" title="Profile" />
        </div>

        <Link to="/register">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;