import React from 'react';
import '../Style/LandingCom1.css';
import { Phone } from 'lucide-react';
import SEO from '../Component/seo';

const LandingCom1 = () => {
  return (
    <>
      {/* 🔥 PAGE LEVEL SEO (MUST) */}
    <SEO
  title="PlusPoint Ambulance | 24/7 Emergency Ambulance Service in Noida"
  description="PlusPoint Ambulance provides fast, reliable 24/7 emergency medical and ambulance services with advanced equipment and 15+ years of experience."
  keywords="PlusPoint Ambulance, emergency ambulance service, 24/7 ambulance Noida, fast ambulance near me"
  url="https://pluspointambulance.online"
  schema={{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlusPoint Ambulance",
    "url": "https://pluspointambulance.online",
    "logo": "https://pluspointambulance.online",
    "telephone": "+91-9990453334",
    "telephone": "+91-7065666767",
     "telephone": "+91-8383801191",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-170 SK, Sector 110",
      "addressLocality": "Noida",
      "addressRegion": "UP",
      "postalCode": "201304",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": {
      "@type": "Place",
      "name": "Noida, Greater Noida, Delhi NCR"
    },
    "sameAs": [
      "https://www.facebook.com/pluspointambulance",
      "https://www.instagram.com/pluspointambulance/",
      "https://x.com/ppambulance"
    ]
  }}
/>


      <div className="amcare-container">
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            {/* ✅ SINGLE H1 FOR SEO */}
            <h1 className="hero-title">
              PlusPoint Ambulance – 24/7 Emergency Medical Services
            </h1>

            <p className="hero-description">
              PlusPoint Ambulance is committed to delivering fast, reliable,
              and professional emergency medical services equipped with
              advanced life-saving equipment and trained paramedics.
            </p>

            <div className="hero-actions">
              <button
                className="hero-cta call"
                onClick={() => (window.location.href = 'tel:+919990453334')}
                aria-label="Call PlusPoint Ambulance Emergency Number"
              >
                <Phone size={20} /> &nbsp; Call Now
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
              <span className="card-value">+91 83838 01191</span>
            </div>
          </div>

          <div className="contact-card reserve">
            <div className="card-icon">📋</div>
            <div className="card-content">
              <span className="card-label">For Reserve:</span>
              <span className="card-value">+91 70656 66767</span>
            </div>
          </div>

          <div className="contact-card info">
            <div className="card-icon">ℹ️</div>
            <div className="card-content">
              <span className="card-label">For Information:</span>
              <span className="card-value">+91 99904 53334</span>
            </div>
          </div>
        </div>

        {/* 🔥 Hidden SEO text (Google ke liye) */}
        <p className="sr-only">
          PlusPoint Ambulance is a trusted 24/7 emergency ambulance service
          provider in Noida offering fast response, advanced medical equipment,
          and experienced paramedics.
        </p>
      </div>
    </>
  );
};

export default LandingCom1;
