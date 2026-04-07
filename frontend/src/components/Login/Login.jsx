import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      setMessage(res.data.message); // ✅ success

      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
      setError("Invalid email or password"); // ❌ error
    }
  };
  return (
    <div className="login-container">
      <div className="login-overlay"></div>

      {/* LEFT CONTENT */}
      <div className="login-left">
        <h1 style={{ color: "white" }}>Discover Your Fashion</h1>
        <p>
          Discover the best fashion from your favourite brands and get it
          delivered fast to your doorstep.
        </p>
        <button className="explore-btn">Shop Now</button>
      </div>

      {/* LOGIN FORM */}
      <div className="login-card">
        <h2 style={{ color: "white" }}>Login</h2>
        <p>Welcome back! Login to your account</p>

        {message && <p style={{ color: "lightgreen" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group password-field">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter your password"
    required
    onChange={handleChange}
  />

  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <p className="register-text">
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
