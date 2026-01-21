import React from 'react';
import '../Style/LandingCom1.css';
import { Phone } from 'lucide-react';


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
      <div className="hero-actions">
  <button
  
    className="hero-cta call"
    onClick={() => window.location.href = "tel:+919990453334"}
  >
   <Phone size={20} /> &nbsp; 
 Call Now
  </button>


</div>

        </div>
      </section>

      {/* Contact Cards */}
      <div className="contact-cards">
        <div className="contact-card booking">
          <div className="card-icon">📅</div>
          <div className="card-content">
            <span className="card-label">For Booking:</span>
            <span className="card-value">+91 8383801191 </span>
          </div>
        </div>
        <div className="contact-card reserve">
          <div className="card-icon">📋</div>
          <div className="card-content">
            <span className="card-label">For Reserve:</span>
            <span className="card-value">+91 7065666767</span>
          </div>
        </div>
        <div className="contact-card info">
          <div className="card-icon">ℹ️</div>
          <div className="card-content">
            <span className="card-label">For Information:</span>
            <span className="card-value">+91 9990453334</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmcareLanding;