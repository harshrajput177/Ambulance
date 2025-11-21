import React, { useState } from 'react';
import { Check } from 'lucide-react';
import '../Style/ExcellenceSection.css';
import img1 from "../../public/dd.jpg"
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

        {/* Tab Content (Mission / Vision / History) */}
<div className="tab-content">
  {activeTab === "mission" && (
    <p>
      Our mission is to provide fast, reliable, and high-quality emergency
      medical services. We aim to ensure that every patient receives prompt
      care, advanced medical support, and compassionate assistance during
      critical moments.
    </p>
  )}

  {activeTab === "vision" && (
    <p>
      Our vision is to become the most trusted emergency healthcare provider
      in the region. We strive to deliver innovative medical solutions,
      expand our service reach, and continuously upgrade our technology to
      save more lives.
    </p>
  )}

  {activeTab === "history" && (
    <p>
      Amcare was established in 2009 with just one emergency vehicle and two
      medical staff. Over the years, we expanded to a fleet of 40+ ambulances
      and a dedicated medical team. In 2015, we introduced our advanced 
      life-support units, making us one of the leading emergency response 
      providers in the city.
    </p>
  )}
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