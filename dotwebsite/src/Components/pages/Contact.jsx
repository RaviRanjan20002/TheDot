import React from 'react';
import "../../../styles/ContactForm.css";
import ContactInfo from './contactInfo';
import Footer from '../Section/Footer';

const ContactForm = () => {
  return (
    <div className="contact-form-page">
      <div className="contact-form-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch for IIT-JEE and NEET coaching inquiries.</p>
        </div>
        <form className="contact-form">
          <label>
            Enter your first name
            <input type="text" placeholder="Your first name here" />
          </label>
          <label>
            Enter your email address*
            <input type="email" placeholder="Your email address here" required />
          </label>
          <label>
            Enter your message here*
            <textarea placeholder="Your message here" required></textarea>
          </label>
          <button type="submit">Submit your inquiry now</button>
        </form>
      </div>
      <div>
      <ContactInfo/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
};

export default ContactForm;
