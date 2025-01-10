import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../../styles/ContactForm.css";
import ContactInfo from './contactInfo';
import Footer from '../Section/Footer';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_di6rkd9', 'template_22y7blm', form.current, {
        publicKey: 'FbH8g4g1tsfsZAAVP',
      })
      .then(
        () => {
          alert('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form-page">
      <div className="contact-form-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch for IIT-JEE and NEET coaching inquiries.</p>
        </div>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label>
            Enter your first name
            <input type="text" name="user_name" placeholder="Your first name here" />
          </label>
          <label>
            Enter your email address*
            <input type="email" name="user_email" placeholder="Your email address here" required />
          </label>
          <label>
            Enter your message here*
            <textarea name="message" placeholder="Your message here" required></textarea>
          </label>
          <button type="submit">Submit your inquiry now</button>
        </form>
      </div>
      <div>
        <ContactInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactForm;
