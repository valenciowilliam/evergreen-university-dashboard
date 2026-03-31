import React, { useState } from "react";
import "./LoginPanel.css";

const LoginPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div className="welcome-card">
          <h2>Welcome 👋</h2>
          <p className="welcome-text">{email}</p>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form className="login-card" onSubmit={handleLogin}>
          <h2 className="login-title">Sign in to your account</h2>
          <p className="login-subtitle">
            Enter your credentials to continue
          </p>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <p className="login-footer">
            Don’t have an account? <span>Sign up</span>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginPanel;
