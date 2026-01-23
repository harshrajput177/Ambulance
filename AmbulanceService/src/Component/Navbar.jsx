import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X
} from "lucide-react";

import '../Style/LandingCom1.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* 🔹 TOP BAR (NAP = SEO GOLD) */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="tel:+919990453334" className="contact-item">
              <Phone size={16} />
              <span>Call: +91 99904 53334</span>
            </a>

            <a
              href="mailto:pluspointambulance@gmail.com"
              className="contact-item"
            >
              <Mail size={16} />
              <span>Email: pluspointambulance@gmail.com</span>
            </a>
          </div>

          <div className="top-right">
            <span className="share-text">Follow:</span>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/pluspointambulance"
                className="social-icon"
                aria-label="PlusPoint Ambulance Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook size={14} />
              </a>

              <a
                href="https://www.instagram.com/pluspointambulance/"
                className="social-icon"
                aria-label="PlusPoint Ambulance Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram size={14} />
              </a>

              <a
                href="https://x.com/ppambulance"
                className="social-icon"
                aria-label="PlusPoint Ambulance Twitter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN NAVIGATION */}
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="nav-content">
          {/* 🔥 BRAND (TEXT IS IMPORTANT FOR SEO) */}
          <div className="logo" onClick={handleClick}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              aria-hidden="true"
            >
              <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="#E53935" />
              <rect x="18" y="12" width="4" height="16" fill="white" />
              <rect x="12" y="18" width="16" height="4" fill="white" />
            </svg>

            <span className="logo-text-NAV">
              PlusPoint Ambulance
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* 🔹 INTERNAL LINKS (CRITICAL FOR SEO) */}
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#process" className="nav-link">Proccess</a></li>
            <li><a href="#faq" className="nav-link">FAQs</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* CTA */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="quote-btn-nav"
              aria-label="Get ambulance service quote"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* 🔥 Hidden SEO text (Navbar-level signal) */}
      <p className="sr-only">
        PlusPoint Ambulance provides 24/7 emergency ambulance services with fast
        response time, trained medical staff, and reliable patient transport.
      </p>
    </>
  );
};

export default Navbar;
