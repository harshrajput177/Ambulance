import React, { useState } from 'react';
import { Check } from 'lucide-react';
import '../Style/ExcellenceSection.css';
import img1 from "../../public/dd.jpg";
import img2 from "../../public/Emergency-Light-PNG-removebg-preview.png";

const ExcellenceSection = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'mission', label: 'OUR MISSION' },
    { id: 'vision', label: 'OUR VISION' },
    { id: 'history', label: 'OUR HISTORY' }
  ];

  const features = [
    { icon: <Check size={20} />, text: 'Advanced Medical Equipment' },
    { icon: <Check size={20} />, text: 'Patient-Centered Care' },
    { icon: <Check size={20} />, text: 'Trained Medical Staff' },
    { icon: <Check size={20} />, text: 'Fast Emergency Response' },
    { icon: <Check size={20} />, text: '24/7 Ambulance Availability' }
  ];

  return (
    <section className="excellence-section" id="about">
      <div className="excellence-container">
        {/* Left Side - Image */}
        <div className="excellence-image-wrapper">
          <div className="image-container">
            <img
              src={img1}
              alt="PlusPoint Ambulance emergency medical service"
              className="equipment-image"
            />

            {/* Experience Badge */}
            <div className="experience-badge">
              <div className="badge-content">
                <svg width="80" height="80" viewBox="0 0 100 100" className="badge-icon">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#E53935" strokeWidth="2" />
                  <path d="M50 30 L60 50 L50 70 L40 50 Z" fill="#E53935" />
                  <rect x="48" y="40" width="4" height="20" fill="white" />
                  <rect x="40" y="48" width="20" height="4" fill="white" />
                </svg>

                <div className="badge-text">
                  <span className="badge-years">15+ YEARS</span>
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
              Excellence in Emergency Ambulance Services
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

          {/* Main Description */}
          <p className="excellence-description">
            <strong>PlusPoint Ambulance</strong> is a trusted 24/7 emergency
            ambulance service provider with over <strong>15 years of
            experience</strong>. We specialize in fast response, professional
            medical care, and safe patient transportation during critical
            emergencies.
          </p>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "mission" && (
              <p>
                Our mission is to deliver fast, reliable, and high-quality
                emergency ambulance services. We focus on saving lives through
                quick response times, advanced medical support, and compassionate
                care.
              </p>
            )}

            {activeTab === "vision" && (
              <p>
                Our vision is to become the most trusted emergency ambulance
                service in the region by continuously improving our medical
                technology, expanding service coverage, and maintaining the
                highest standards of patient care.
              </p>
            )}

            {activeTab === "history" && (
              <p>
                PlusPoint Ambulance was established in 2009 with a single
                emergency vehicle. Over the years, we have grown into a reliable
                ambulance service with a skilled medical team and modern
                ambulances, serving patients across the region with dedication
                and trust.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Emergency Light */}
      <div className="emergency-light">
        <img
          className="light-red"
          src={img2}
          alt="PlusPoint Ambulance emergency light"
        />
      </div>

      {/* 🔥 Hidden SEO text */}
      <p className="sr-only">
        PlusPoint Ambulance provides 24/7 emergency ambulance services with
        trained paramedics, fast response time, and 15+ years of experience.
      </p>
    </section>
  );
};

export default ExcellenceSection;
