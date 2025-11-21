import React from 'react';
import '../Style/LandingCom1.css';

const AmcareLanding = () => {
  return (
    <div className="amcare-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Emergency Medical Services</h1>
          <p className="hero-description">
            These services are designed to reach the scene of an emergency quickly,
            equipped with advanced medical equipment.
          </p>
          <button className="hero-cta">Get a Quote</button>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="contact-cards">
        <div className="contact-card booking">
          <div className="card-icon">📅</div>
          <div className="card-content">
            <span className="card-label">For Booking:</span>
            <span className="card-value">+91 8178505081 </span>
          </div>
        </div>
        <div className="contact-card reserve">
          <div className="card-icon">📋</div>
          <div className="card-content">
            <span className="card-label">For Reserve:</span>
            <span className="card-value">+91 9695911780</span>
          </div>
        </div>
        <div className="contact-card info">
          <div className="card-icon">ℹ️</div>
          <div className="card-content">
            <span className="card-label">For Information:</span>
            <span className="card-value">+91 8178505081</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmcareLanding;