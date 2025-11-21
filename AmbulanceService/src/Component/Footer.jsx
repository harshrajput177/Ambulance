import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, ChevronUp, MapPin } from 'lucide-react';
import '../Style/Footer.css';
import img2 from "../../public/Emergency-Light-PNG-removebg-preview.png"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whoWeAreLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: "FAQ's", href: '#faq' },
  ];

  const moreLinks = [
    { label: 'Process', href: '#process' },
    { label: 'Contact us', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Blog', href: '#blog' }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#facebook', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: '#twitter', label: 'Twitter' },
    { icon: <Instagram size={18} />, href: '#instagram', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '#linkedin', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Left Section - Logo & Description */}
          <div className="footer-column footer-brand">
            <div className="footer-logo">
              <div className="logo-circle">
                <span className="logo-text">Rathor</span>
              </div>
            </div>
            <h3 className="footer-title">
              The Fastest and Secure Ambulance Service
            </h3>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section - Who We Are */}
          <div className="footer-column">
            <h4 className="footer-column-title">Who we are</h4>
            <ul className="footer-links">
              {whoWeAreLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Section - More Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">More Links</h4>
            <ul className="footer-links">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Emergency Contact */}
          <div className="footer-column footer-emergency">
            <div className="emergency-card-footer">
              <div className="emergency-light-footer">
              <img className='light-red-footer   light-svg  light-glow' src={img2} alt="" />
              </div>
              <a href="tel:+12463330089" className="emergency-phone">
                +91 8178505081
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              Copyright 2025 by <a href="#" className="copyright-link">Amcare</a> All Right Reserved.
            </p>
          </div>
          <div className="footer-address">
            <MapPin size={18} className="address-icon" />
            <span>88 broklyn silver street, USA</span>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <button 
        className="chat-button-footer" 
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      <button 
        className="scroll-top-button" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer