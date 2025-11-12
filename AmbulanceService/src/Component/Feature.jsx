import React from 'react';
import '../Style/Feature.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v3m0 0a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0a6 6 0 0 1 6-6z" />
          <path d="M12 3L8 7m4-4l4 4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Secure Transport',
      description: 'Amcare secure transport services play a critical role in healthcare system, providing safe and reliable'
    },

    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="7" width="16" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M12 12h.01M9 15h6" />
        </svg>
      ),
      title: 'On Demand Service',
      description: 'Amcare secure transport services play a critical role in healthcare system, providing safe and reliable'
    },

    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          <path d="M12 5.67L9.5 8.17" strokeLinecap="round" />
        </svg>
      ),
      title: 'Emergency Transport',
      description: 'Amcare secure transport services play a critical role in healthcare system, providing safe and reliable'
    }

    
  ];

  return (
    <div className="features-section-FS">
      <div className="features-badge-FS">FEATURES</div>
      <h1 className="features-title-FS">Why Choose Us</h1>
      
      <div className="features-grid-FS">
        {features.map((feature, index) => (
          <div key={index} className="feature-card-FS">
            <div className="icon-circle-FS">
              {feature.icon}
            </div>
            <h3 className="feature-title-FS">{feature.title}</h3>
            <p className="feature-description-FS">{feature.description}</p>
            <button className="learn-more-btn-FS">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;