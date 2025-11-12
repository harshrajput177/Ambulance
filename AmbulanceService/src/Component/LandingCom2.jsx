import React, { useState } from 'react';
import { Check } from 'lucide-react';
import '../Style/ExcellenceSection.css';
import img1 from "../../public/product-jpeg.jpeg"
import img2 from "../../public/Emergency-Light-PNG-removebg-preview.png"

const ExcellenceSection = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'mission', label: 'OUR MISSION' },
    { id: 'vision', label: 'OUR VISION' },
    { id: 'history', label: 'OUR HISTORY' }
  ];

  const features = [
    { icon: <Check size={20} />, text: 'Medical Equipment' },
    { icon: <Check size={20} />, text: 'Patient-Centered Approach' },
    { icon: <Check size={20} />, text: 'Comprehensive Care' },
    { icon: <Check size={20} />, text: 'Community Engagement' },
    { icon: <Check size={20} />, text: '24/7 Availability' }
  ];

  return (
    <section className="excellence-section">
      <div className="excellence-container">
        {/* Left Side - Image */}
        <div className="excellence-image-wrapper">
          <div className="image-container">
            <img 
              src={img1} 
              alt="Emergency Medical Equipment"
              className="equipment-image"
            />
            <div className="experience-badge">
              <div className="badge-content">
                <svg width="80" height="80" viewBox="0 0 100 100" className="badge-icon">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#E53935" strokeWidth="2"/>
                  <path d="M50 30 L60 50 L50 70 L40 50 Z" fill="#E53935"/>
                  <rect x="48" y="40" width="4" height="20" fill="white"/>
                  <rect x="40" y="48" width="20" height="4" fill="white"/>
                </svg>
                <div className="badge-text">
                  <span className="badge-years">15 YEARS</span>
                  <span className="badge-label">EXPERIENCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="excellence-content">
          <div className="content-header">
            <span className="who-we-are-badge">WHO WE ARE</span>
            <h2 className="excellence-title">
              Excellence in Emergency Medical Services
            </h2>
          </div>

          {/* Tabs */}
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="excellence-description">
            At Amcare we pride ourselves on delivering excellence in emergency medical 
            services. Our team of highly trained and experienced professionals
          </p>

          {/* Features List */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <span className="feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Light (Bottom Right) */}
      <div className="emergency-light">
        <img  className='light-red' src={img2} alt="" />
      </div>

    
    </section>
  );
};

export default ExcellenceSection;