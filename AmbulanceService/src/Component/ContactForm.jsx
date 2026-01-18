import React, { useState } from "react";
import "../Style/ContactForm.css";
import ambulanceImg from "../../public/Medical-Transportation-Service-in-Thane-removebg-preview.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919990453334"; // 👈 apna WhatsApp number (country code ke sath)

    const whatsappMessage = `
🚑 *Ambulance Enquiry*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
💬 Message: ${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="new-contact-wrapper">
      <div className="new-contact-container">
        {/* Left Side - Form */}
        <div className="new-contact-card">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Please fill out the form below.</p>

          <form className="new-contact-form" onSubmit={handleSubmit}>
            <div className="new-form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                onChange={handleChange}
              />
            </div>

            <div className="new-form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
              />
            </div>

            <div className="new-form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your number"
                required
                onChange={handleChange}
              />
            </div>

            <div className="new-form-group">
              <label>Your Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Write your message here..."
                required
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="new-submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="new-image-section-amb">
          <img
            src={ambulanceImg}
            alt="Ambulance"
            className="ambulance-image-amb"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;


