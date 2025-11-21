import React from "react";
import "../Style/ContactForm.css";
import ambulanceImg from "../../public/Medical-Transportation-Service-in-Thane-removebg-preview.png"; // apni image ka path yahan set karein


function Contact(){


return (
<div className="new-contact-wrapper">
<div className="new-contact-container">
{/* Left Side - Form */}
<div className="new-contact-card">
<h2>Get In Touch</h2>
<p>We'd love to hear from you. Please fill out the form below.</p>


<form className="new-contact-form">
<div className="new-form-group">
<label>Full Name</label>
<input type="text" placeholder="Enter your name" required />
</div>


<div className="new-form-group">
<label>Email Address</label>
<input type="email" placeholder="Enter your email" required />
</div>


<div className="new-form-group">
<label>Phone Number</label>
<input type="tel" placeholder="Enter your number" required />
</div>


<div className="new-form-group">
<label>Your Message</label>
<textarea rows="4" placeholder="Write your message here..." required></textarea>
</div>


<button type="submit" className="new-submit-btn">Send Message</button>
</form>
</div>


{/* Right Side - Image */}
<div className="new-image-section-amb">
<img src={ambulanceImg} alt="Ambulance" className="ambulance-image-amb" />
</div>
</div>
</div>
);
};


export default Contact;

