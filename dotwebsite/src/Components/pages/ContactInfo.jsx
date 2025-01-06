import React from 'react';
import "../../../styles/ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>
          Reach out to us for inquiries about IIT-JEE and NEET coaching.
          We're here to assist you with all your educational needs.
        </p>
        <h3>Location</h3>
        <p>94L, Old DC Office Rd, Model Town, Rewari, Haryana 123401</p>
        <h3>Hours</h3>
        <p>9 AM - 6 PM</p>
      </div>
      <div className="contact-map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.714582439412!2d76.61663697494038!3d28.18559440423719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d51c4b5fe53f9%3A0x4a419ba45f7a96bb!2sThe%20DOT!5e0!3m2!1sen!2sus!4v1736159274942!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
