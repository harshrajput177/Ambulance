import React from 'react';
import '../Style/Category.css';
import img1 from "../../public/Ambulance-india.webp";
import img2 from "../../public/vehicle-ambulance-medicine-3065190 (1).jpg";
import img3 from "../../public/selection-013.png";
import img4 from "../../public/images.jpeg";

const AmbulanceCategory = () => {
  const ambulances = [
    {
      id: 1,
      type: 'Dead Body Ambulance Service',
      description:
        'PlusPoint Ambulance provides respectful and safe dead body transfer services with trained staff and proper arrangements.',
      color: 'red',
      image: img1
    },
    {
      id: 2,
      type: 'Hospital Transfer Ambulance',
      description:
        'Safe and reliable patient transfer ambulance service from one hospital to another with medical supervision.',
      color: 'blue',
      image: img2
    },
    {
      id: 3,
      type: 'Medical Support Ambulance',
      description:
        'Basic medical ambulance service for routine patient transport with essential medical support.',
      color: 'green',
      image: img4
    },
    {
      id: 4,
      type: 'Emergency Fast Ambulance',
      description:
        '24/7 fast emergency ambulance service with quick response time for critical medical situations.',
      color: 'orange',
      image: img3
    }
  ];

  return (
    <section className="ambulance-category-section" id="services">
      <span className="ambulance-badge">AMBULANCE SERVICES</span>

      {/* ✅ h1 avoided – SEO safe */}
      <h2 className="ambulance-title">
        Ambulance Services Offered by PlusPoint Ambulance
      </h2>

      {/* 🔥 Hidden SEO content */}
      <p className="sr-only">
        PlusPoint Ambulance offers 24/7 emergency ambulance services including
        hospital transfer, dead body ambulance, medical support ambulance, and
        fast emergency response services.
      </p>

      <div className="ambulance-grid">
        {ambulances.map((ambulance) => (
          <div
            key={ambulance.id}
            className={`ambulance-card ${ambulance.color}`}
          >
            <div className="ambulance-overlay">
              <h3 className="ambulance-type">{ambulance.type}</h3>
              <p className="ambulance-description">
                {ambulance.description}
              </p>
              <button
                className="quote-btn"
                aria-label={`Get quote for ${ambulance.type}`}
              >
                Get a Quote
              </button>
            </div>

            <img
              src={ambulance.image}
              alt={`PlusPoint Ambulance ${ambulance.type}`}
              className="ambulance-service-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmbulanceCategory;

