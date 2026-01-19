import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Menu, X } from "lucide-react";

import '../Style/LandingCom1.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate("/")
  }
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="tel:9990453334" className="contact-item">
              <Phone size={16} />
              <span>CALL: +91 9990453334</span>
            </a>
            <a href="mailto:pluspointambulance@gmail.com" className="contact-item">
              <Mail size={16} />
              <span>MAIL: pluspointambulance@gmail.com</span>
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
              <a href="https://www.facebook.com/pluspointambulance" className="social-icon">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/pluspointambulance/" className="social-icon">
                <Instagram size={14} />
              </a>
              <a href="https://x.com/ppambulance" className="social-icon">
                <Twitter size={14} />
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
            <span className="logo-text-NAV" onClick={handleClick}>PlusPointAmbulance</span>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

  <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
  <li><a href="#home" className="nav-link active">Home</a></li>
  <li><a href="#about" className="nav-link">About</a></li>
  <li><a href="#services" className="nav-link">Services</a></li>
  <li><a href="#process" className="nav-link">Process</a></li>
  <li><a href="#faq" className="nav-link">FAQ</a></li>
  <li><a href="#contact" className="nav-link">Contact</a></li>
</ul>


     <div className="nav-actions">
  <button
    className="quote-btn-nav"
    onClick={() => {
      window.location.href = "/#contact";
    }}
  >
    Get a Quote
  </button>
</div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;