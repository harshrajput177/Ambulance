import React from 'react';
import '../Style/Category.css';

const AmbulanceCategory = () => {
  const ambulances = [
    {
      id: 1,
      type: 'Type VII',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque',
      color: 'red',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80'
    },
    {
      id: 2,
      type: 'Type Axta 440',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80'
    },
    {
      id: 3,
      type: 'Vanguard 320',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1582719366216-96b3e4c1c2b3?w=800&q=80'
    },
    {
      id: 4,
      type: 'Firebox ICU+',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque semper pellentesque',
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1614883108514-48710734e5d4?w=800&q=80'
    }
  ];

  return (
    <div className="ambulance-category-section">
      <div className="ambulance-badge">AMBULANCE</div>
      <h1 className="ambulance-title">Ambulance Category</h1>
      
      <div className="ambulance-grid">
        {ambulances.map((ambulance) => (
          <div key={ambulance.id} className={`ambulance-card ${ambulance.color}`}>
            <div className="ambulance-overlay">
              <h3 className="ambulance-type">{ambulance.type}</h3>
              <p className="ambulance-description">{ambulance.description}</p>
              <button className="quote-btn">Get a Quote</button>
            </div>
            <img 
              src={ambulance.image} 
              alt={ambulance.type}
              className="ambulance-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmbulanceCategory;