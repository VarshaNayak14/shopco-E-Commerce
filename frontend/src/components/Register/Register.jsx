import "./Register.css";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError(""); // typing pe error remove ho jaye
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const { name, email, password, confirmPassword } = formData;

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const strongPass = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
    if (!strongPass.test(password)) {
      setError("Password must contain 1 uppercase & 1 number");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      setMessage(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-overlay"></div>

      {/* LEFT CONTENT */}
      <div className="register-left">
        <h1 style={{ color: "white" }}>Discover Your Fashion</h1>
        <p>
          Discover the best fashion from your favourite brands and get it
          delivered fast to your doorstep.
        </p>
        <button className="explore-btn">Shop Now</button>
      </div>

      {/* REGISTER FORM */}
      <div className="register-card">
        <h2 style={{ color: "white" }}>Register</h2>
        <p>Create your account</p>

        {message && <p style={{ color: "lightgreen" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />{" "}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Create password"
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

          <div className="input-group password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm password"
              required
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button className="register-btn" type="submit">
            Register
          </button>
        </form>

        <p className="login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
