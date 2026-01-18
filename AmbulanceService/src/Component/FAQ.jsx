import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../Style/FAQSection.css';
import img1  from "../../public/vehicle-ambulance-medicine-3065190 (1).jpg";
import img2  from "../../public/branding-2.jpg";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      question: 'What types of medical emergencies do you handle?',
      answer: 'Our ambulance service is equipped to handle a wide range of medical emergencies, including trauma, cardiac events, respiratory distress, strokes, and more.'
    },
    {
      question: 'What equipment do your ambulances carry?',
      answer: 'Our ambulance service is equipped to handle a wide range of medical emergencies, including trauma.'
    },
    {
      question: 'Do you provide inter-facility transfers?',
      answer: 'Yes, we provide safe and reliable inter-facility transfers with trained medical staff and proper equipment.'
    },
    {
      question: 'Are your services covered by insurance?',
      answer: 'Most insurance plans cover our emergency ambulance services. We work with major insurance providers to ensure coverage.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Side - Images */}
        <div className="faq-images">
          {/* Decorative Dots */}
          <div className="dots-decoration dots-top">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="dot"></div>
            ))}
          </div>

          {/* Main Image - Female Paramedic */}
          <div className="image-card female-paramedic">
            <img 
              src={img1}
              alt="Female Paramedic"
              className="paramedic-img"
            />
          </div>

          {/* Top Right Image - Male Paramedic */}
          <div className="image-card male-paramedic">
            <img 
              src={img2}
              alt="Male Paramedic"
              className="paramedic-img"
            />
          </div>

          {/* Experience Badge */}
          <div className="experience-badge-faq">
            <div className="badge-number">15</div>
            <div className="badge-text-wrapper">
              <span className="badge-years">Years</span>
              <span className="badge-description">of Experience in the Finance Service</span>
            </div>
          </div>

          {/* Decorative Dots Bottom */}
          <div className="dots-decoration dots-bottom">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="dot"></div>
            ))}
          </div>
        </div>

        {/* Right Side - FAQ Content */}
        <div className="faq-content">
          <div className="faq-header">
            <span className="faq-badge">GENERAL FAQS</span>
            <h2 className="faq-title">Taking all your questions to reality.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;