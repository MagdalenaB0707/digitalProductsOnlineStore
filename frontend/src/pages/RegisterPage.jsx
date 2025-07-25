import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.email || !userData.password) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (userData.password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }
    if (userData.password !== userData.confirmPassword) {
  setErrorMsg("Passwords do not match.");
  return;
}


    setLoading(true);
    setErrorMsg("");

    axios
      .post("api/register", userData)
      .then(() => navigate("/login"))
      .catch(() => setErrorMsg("Registration failed. Please try again."))
      .finally(() => setLoading(false));
  };
  const handleBackClick = () => {
    const previousPath = document.referrer;
    const invalidPaths = ["/login", "/register"];
    const currentPath = window.location.pathname;
    if (
      window.history.length > 1 &&
      !invalidPaths.includes(
        document.referrer.replace(window.location.origin, "")
      )
    ) {
      navigate(-1);
    } else {
      // If referrer or history is not safe, go home
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <button type="button" className="back-button" onClick={handleBackClick}>
        ← Back
      </button>
      <div className="auth-card">
        <h3 className="auth-title">Register</h3>

        {errorMsg && <div className="auth-error">{errorMsg}</div>}
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Insert your full name"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Insert your email"
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Insert your password"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-button"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-primary fw-bold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
