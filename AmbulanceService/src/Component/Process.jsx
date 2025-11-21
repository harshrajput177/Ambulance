import React from 'react';
import '../Style/process.css';

const ProcessSection = () => {
const steps = [
  {
    number: '01',
    title: 'Call Emergency Hotline',
    description: 'Contact our emergency helpline immediately and share your exact location for a quick response.'
  },
  {
    number: '02',
    title: 'Provide Patient Details',
    description: 'Explain the patient’s condition, symptoms, and type of emergency so the right medical support can be arranged.'
  },
  {
    number: '03',
    title: 'Ambulance Dispatch',
    description: 'After verification, the nearest ambulance is dispatched with GPS tracking to reach you as fast as possible.'
  },
  {
    number: '04',
    title: 'On-Site Medical Care',
    description: 'Our trained paramedics provide immediate first aid and safely transfer the patient to the hospital.'
  }
];


  return (
    <div className="process-section">
      <div className="process-badge">PROCESS</div>
      <h1 className="process-title">How to get Service</h1>
      
      <div className="process-container">
        <div className="progress-line"></div>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-header">
                <span className="step-label">STEP-{step.number}</span>
                <div className="step-dot"></div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;