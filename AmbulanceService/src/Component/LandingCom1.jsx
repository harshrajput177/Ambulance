import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin, Search, Menu, X } from 'lucide-react';
import '../Style/LandingCom1.css';

const AmcareLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="amcare-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="tel:+912345432" className="contact-item">
              <Phone size={16} />
              <span>CALL: +91 (234) 5432</span>
            </a>
            <a href="mailto:info@example.com" className="contact-item">
              <Mail size={16} />
              <span>MAIL: info@example.com</span>
            </a>
          </div>
          <div className="top-right">
            <div className="language">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23C8102E' stroke-width='4' clip-path='inset(0)'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" 
                alt="UK Flag" 
                width="20" 
              />
              <span>ENGLISH</span>
            </div>
            <span className="share-text">SHARE:</span>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Facebook size={14} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={14} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={14} />
              </a>
              <a href="#" className="social-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="#E53935"/>
              <rect x="18" y="12" width="4" height="16" fill="white"/>
              <rect x="12" y="18" width="16" height="4" fill="white"/>
            </svg>
            <span className="logo-text-NAV">Rathor</span>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#" className="nav-link active">Home</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Services</a></li>
            <li><a href="#" className="nav-link">Process</a></li>
            <li><a href="#" className="nav-link">FAQ</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="quote-btn">Get a Quote</button>
          </div>
        </div>
      </nav>

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