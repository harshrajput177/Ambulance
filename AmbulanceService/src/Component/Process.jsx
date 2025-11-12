import React from 'react';
import '../Style/process.css';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Call at Hotline',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque'
    },
    {
      number: '02',
      title: 'Describe Matter',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque'
    },
    {
      number: '03',
      title: 'Set Direction',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque'
    },
    {
      number: '04',
      title: 'Get Ambulance',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque'
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