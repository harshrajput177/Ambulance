import React from 'react';
import '../Style/process.css';
import SEO from '../Component/seo';   // 👈 SEO import

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Call PlusPoint Ambulance',
      description:
        'Call PlusPoint Ambulance 24/7 emergency helpline and share your exact location for an immediate response.'
    },
    {
      number: '02',
      title: 'Share Patient Details',
      description:
        'Provide patient condition and emergency details so the right ambulance and medical support can be arranged.'
    },
    {
      number: '03',
      title: 'Fast Ambulance Dispatch',
      description:
        'The nearest PlusPoint Ambulance is dispatched instantly with GPS tracking to reach you as fast as possible.'
    },
    {
      number: '04',
      title: 'Emergency Medical Care',
      description:
        'Our trained paramedics provide first aid on-site and safely transfer the patient to the nearest hospital.'
    }
  ];

  return (
    <>
      {/* ✅ SEO for Process Page / Section */}
      <SEO
        title="How PlusPoint Ambulance Service Works | Emergency Ambulance Process"
        description="Learn how PlusPoint Ambulance provides fast 24/7 emergency ambulance services through a simple 4-step process with trained medical staff."
        keywords="PlusPoint Ambulance process, emergency ambulance steps, how ambulance service works, 24/7 ambulance service"
        url="https://pluspointambulance.online/#process"
        
      />

      <section className="process-section" id="process">
        <span className="process-badge">OUR PROCESS</span>

        <h2 className="process-title">
          How PlusPoint Ambulance Emergency Service Works
        </h2>

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
      </section>
    </>
  );
};

export default ProcessSection;
