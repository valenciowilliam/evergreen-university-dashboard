import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info-card">
          <h2>Get in Touch</h2>
          <p>Have questions about admissions or campus life? We're here to help.</p>
          
          <div className="info-item">
            <strong>📍 Location</strong>
            <span>123 University Ave, Academic City</span>
          </div>
          <div className="info-item">
            <strong>✉️ Email</strong>
            <span>admissions@evergreen.edu</span>
          </div>
        </div>

        {/* Contact Form - Styled like your Registration Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help you?" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;