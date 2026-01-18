import React from 'react';
import '../Style/Category.css';
import img1 from "../../public/Ambulance-india.webp";
import img2 from "../../public/vehicle-ambulance-medicine-3065190 (1).jpg";
import img3 from "../../public/selection-013.png";
import img4 from "../../public/images.jpeg";

const AmbulanceCategory = () => {
  const ambulances = [
    {
      id: 1,
      type: 'Dead Body Ambulance',
      description: 'Dead body transfer ke liye specially designed ambulance service.',
      color: 'red',
      image: img1
    },
    {
      id: 2,
      type: 'Hospital Transfer Ambulance',
      description: 'Patient ko safely ek hospital se dusre hospital le jaane ke liye.',
      color: 'blue',
      image: img2
    },
    {
      id: 3,
      type: 'Medical Ambulance',
      description: 'Basic medical support ke sath routine patient transport.',
      color: 'green',
      image: img4
    },
    {
      id: 4,
      type: 'Emergency Fast Ambulance',
      description: 'Critical emergency ke liye fast response ambulance service.',
      color: 'orange',
      image:img3
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
