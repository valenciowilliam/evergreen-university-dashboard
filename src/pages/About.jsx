import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="page-header">
        <div className="badge">Our Story</div>
        <h1>Dedicated to Academic Excellence</h1>
        <p>Founded in 1924, Evergreen University has been at the forefront of research and innovation for over a century.</p>
      </header>

      <section className="about-card section-card">
        <h3>Our Mission</h3>
        <p>To provide an environment where curiosity meets opportunity, empowering students to solve the world's most pressing challenges through technology, arts, and science.</p>
      </section>

      <div className="about-grid">
        <div className="about-card">
          <div className="icon-box">🎓</div>
          <h4>The Faculty</h4>
          <p>Over 400 world-class educators and industry practitioners.</p>
        </div>
        <div className="about-card">
          <div className="icon-box">🌍</div>
          <h4>Global Reach</h4>
          <p>Partnered with 50+ international institutions for exchange programs.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
