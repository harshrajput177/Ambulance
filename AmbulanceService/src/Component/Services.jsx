import React, { useState } from 'react';
import { Check } from 'lucide-react';
import '../Style/Services.css';
import img1 from "../../public/undp-ua-ambulances (1).jpg"
import img2 from "../../public/images.jpeg"

const AmbulanceServices = () => {
  const [activeTab, setActiveTab] = useState('ambulance-service');

  const tabs = [
    { id: 'ambulance-service', label: 'Ambulance Service' },
    { id: 'icu-ambulance', label: 'ICU Ambulance' },
    { id: 'Dead-body', label: 'Dead body transfer' },
    { id: 'medical-support', label: 'Medical Support' }
  ];


  const servicesData = {
  'ambulance-service': {
    title: 'Ambulance Service',
    description:
      'Our ambulance services ensure safe, timely, and professional patient transportation with trained medical staff and fully equipped vehicles for all non-critical and emergency needs.',
    features: [
      'Quick Response Time',
      'Trained Drivers',
      'Basic Life Support',
      'Safe Patient Transport',
      '24/7 Availability'
    ]
  },

  'icu-ambulance': {
    title: 'ICU Ambulance',
    description:
      'ICU ambulances are designed for critically ill patients, equipped with advanced life-saving equipment and accompanied by skilled paramedics and doctors.',
    features: [
      'Ventilator Support',
      'Cardiac Monitoring',
      'Experienced Paramedics',
      'Advanced Medical Equipment',
      'Critical Care Transport'
    ]
  },

  'Dead-body': {
    title: 'Dead Body Transfer',
    description:
      'We provide dignified and respectful dead body transfer services, ensuring proper handling, hygiene, and timely transportation as per legal and family requirements.',
    features: [
      'Respectful Handling',
      'Hygienic Transfer',
      'Long Distance Transport',
      '24/7 Service',
      'Affordable Pricing'
    ]
  },

  'medical-support': {
    title: 'Medical Support',
    description:
      'Our medical support services provide trained healthcare professionals, on-site medical assistance, and emergency readiness for events, homes, and workplaces.',
    features: [
      'Qualified Medical Staff',
      'Emergency Assistance',
      'On-site Medical Care',
      'Flexible Support Plans',
      '24/7 Assistance'
    ]
  }
};


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
          <h3 className="content-title">
  {servicesData[activeTab].title}
</h3>

<p className="content-description">
  {servicesData[activeTab].description}
</p>


            {/* Features Grid */}
            <div className="content-features">
           {servicesData[activeTab].features.map((text, index) => (
  <div key={index} className="content-feature-item">
    <div className="content-feature-icon">
      <Check size={18} />
    </div>
    <span className="content-feature-text">{text}</span>
  </div>
))}

            </div>

           <button
    className="quote-btn-nav"
    onClick={() => {
      window.location.href = "/#contact";
    }}
  >
    Get a Quote
  </button>
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