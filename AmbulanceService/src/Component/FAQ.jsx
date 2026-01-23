import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../Style/FAQSection.css';
import img1  from "../../public/vehicle-ambulance-medicine-3065190 (1).jpg";
import img2  from "../../public/branding-2.jpg";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

const faqs = [
  {
    question: 'What medical emergencies does PlusPoint Ambulance handle?',
    answer:
      'PlusPoint Ambulance provides fast and reliable emergency ambulance services for trauma cases, cardiac emergencies, breathing problems, strokes, accidents, and other critical medical situations.'
  },
  {
    question: 'What medical equipment is available in PlusPoint Ambulances?',
    answer:
      'Our ambulances are fully equipped with oxygen support, stretchers, emergency kits, and advanced life-saving medical equipment to ensure patient safety during transit.'
  },
  {
    question: 'Does PlusPoint Ambulance provide hospital-to-hospital transfers?',
    answer:
      'Yes, PlusPoint Ambulance offers safe and professional inter-facility ambulance transfers with trained staff and properly equipped vehicles.'
  },
  {
    question: 'Is PlusPoint Ambulance service available 24/7?',
    answer:
      'Yes, PlusPoint Ambulance operates 24/7 to provide quick-response emergency ambulance services whenever you need medical assistance.'
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
    <span className="badge-description">
      of Experience in Emergency Ambulance Services
    </span>
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
  <span className="faq-badge">PLUSPOINT AMBULANCE FAQ</span>
  <h2 className="faq-title">
    Frequently Asked Questions About PlusPoint Ambulance Services
  </h2>
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