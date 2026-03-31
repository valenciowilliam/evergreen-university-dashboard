import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="home-navbar">
        <div className="nav-logo">Evergreen <span>Uni</span></div>
        <div className="nav-links">
          <a href="#about">Academics</a>
          <a href="#research">Research</a>
          <Link to="C:\React practical 6\temp\src\RegistrationForm.jsx">
            <button className="nav-auth-btn">Sign In</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-card">
        <div className="hero-badge">Enrollment Open 2026</div>
        <h1>Shape the Future of <br/>Innovation & Art</h1>
        <p>A premier institution dedicated to academic excellence, groundbreaking research, and a vibrant student community.</p>
        <div className="hero-cta">
          <button className="primary-button">Start Application</button>
          <button className="secondary-button">View Programs</button>
        </div>
      </header>

      {/* Stats/Information Section */}
      <section className="info-grid">
        <div className="info-card">
          <h3>94%</h3>
          <p>Graduate Placement</p>
        </div>
        <div className="info-card">
          <h3>12:1</h3>
          <p>Student-Faculty Ratio</p>
        </div>
        <div className="info-card">
          <h3>$45M</h3>
          <p>Research Grants</p>
        </div>
      </section>

      {/* Highlights (Matches Preview Card style) */}
      <section className="preview-card highlight-section">
        <h3>Upcoming Campus Events</h3>
        <div className="event-item">
          <p><strong>Tech Symposium 2026</strong> <span>March 15</span></p>
          <p><strong>Spring Arts Gallery</strong> <span>April 02</span></p>
          <p><strong>Global Leadership Summit</strong> <span>May 10</span></p>
        </div>
      </section>
    </div>
  );
};

export default Home;