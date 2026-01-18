import React, { useState } from 'react';
import { Check } from 'lucide-react';
import '../Style/Services.css';
import img1 from "../../public/undp-ua-ambulances (1).jpg"
import img2 from "../../public/images.jpeg"

const AmbulanceServices = () => {
  const [activeTab, setActiveTab] = useState('medical-support');

  const tabs = [
    { id: 'ambulance-service', label: 'Ambulance Service' },
    { id: 'icu-ambulance', label: 'ICU Ambulance' },
    { id: 'Dead-body', label: 'Dead body transfer' },
    { id: 'medical-support', label: 'Medical Support' }
  ];

  const features = [
    { icon: <Check size={18} />, text: 'Medical Necessity' },
    { icon: <Check size={18} />, text: 'Flexible Payment' },
    { icon: <Check size={18} />, text: '24/7 Assistance' },
    { icon: <Check size={18} />, text: 'Customer Support' },
    { icon: <Check size={18} />, text: 'Additional Benefits' }
  ];

  const stats = [
    { number: '15+', label: 'Patients Served' },
    { number: '30+', label: 'Operation Bases' },
    { number: '100+', label: 'Specialised Vehicles' },
    { number: '300+', label: 'Frontline Staff' }
  ];

  return (
    <section className="ambulance-services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-badge">OUR SERVICES</span>
          <h2 className="services-title">Expert Ambulance Services</h2>
        </div>

        {/* Tabs */}
        <div className="services-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`service-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="services-content-box">
          {/* Left Content */}
          <div className="content-left">
            <h3 className="content-title">Medical Support</h3>
            <p className="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fella, 
              suscipit you have action against fraud. See it the Security Center for and 
              Mobile and Online Banking.
            </p>

            {/* Features Grid */}
            <div className="content-features">
              {features.map((feature, index) => (
                <div key={index} className="content-feature-item">
                  <div className="content-feature-icon">
                    {feature.icon}
                  </div>
                  <span className="content-feature-text">{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="get-quote-btn">Get a Quote</button>
          </div>

          {/* Right Content - Images */}
          <div className="content-right">
            <div className="helicopter-image">
              <img 
                src={img2} 
                alt="Air Ambulance Helicopter"
                className="helicopter-img"
              />
            </div>
            <div className="paramedic-image">
              <img 
                src={img1} 
                alt="Paramedic Staff"
                className="paramedic-img"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="services-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbulanceServices;