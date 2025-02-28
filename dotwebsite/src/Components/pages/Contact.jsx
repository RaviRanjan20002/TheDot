// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import "../../../styles/ContactForm.css";
// import ContactInfo from './ContactInfo';
// import Footer from '../Section/Footer';

// const ContactForm = () => {
//   const form = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     emailjs
//       .sendForm('service_di6rkd9', 'template_22y7blm', form.current, {
//         publicKey: 'FbH8g4g1tsfsZAAVP',
//       })
//       .then(
//         () => {
//           alert('Message sent successfully');
//           form.current.reset();
//           setIsSubmitting(false);
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           setIsSubmitting(false);
//         },
//       );
//   };

//   return (
//     <div className="contact-form-page">
//       <div className="contact-form-container">
//         <div className="contact-header">
//           <h1>Contact Us</h1>
//           <p>Get in touch for IIT-JEE and NEET coaching inquiries.</p>
//         </div>
//         <form ref={form} className="contact-form" onSubmit={sendEmail}>
//           <label>
//             Enter your first name*
//             <input type="text" name="user_name" placeholder="Your first name here" required />
//           </label>
//           <label>
//             Enter your Phone No*
//             <input type="phone" name="user_phone" placeholder="Your phone number here" required />
//           </label>
//           <label>
//             Enter your email address*
//             <input type="email" name="user_email" placeholder="Your email address here" required />
//           </label>
//           <label>
//             Enter your message here*
//             <textarea name="message" placeholder="Your message here" required></textarea>
//           </label>
//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Sending...' : 'Submit your inquiry now'}
//           </button>
//         </form>
//       </div>
//       <div>
//         <ContactInfo />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../../../styles/ContactForm.css";
import ContactInfo from './ContactInfo';
import Footer from '../Section/Footer';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (name, value) => {
    let error = '';

    if (name === 'user_name') {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        error = 'Name should only contain alphabets';
      }
    }

    if (name === 'user_phone') {
      if (!/^\d{10}$/.test(value)) {
        error = 'Enter a valid Phone no';
      }
    }

    if (name === 'user_email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Enter a valid email address';
      }
    }

    if (name === 'message') {
      if (value.trim() === '') {
        error = 'Message cannot be empty';
      }
    }

    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));

    const error = validate(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (touched[name]) {
      const error = validate(name, value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform final validation check
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      user_name: true,
      user_phone: true,
      user_email: true,
      message: true,
    });

    // If there are errors, prevent submission
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm('service_di6rkd9', 'template_22y7blm', form.current, {
        publicKey: 'FbH8g4g1tsfsZAAVP',
      })
      .then(
        () => {
          alert('Message sent successfully');
          setFormData({
            user_name: '',
            user_phone: '',
            user_email: '',
            message: '',
          });
          setErrors({});
          setTouched({});
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-form-page">
      <div className="contact-form-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch for IIT-JEE and NEET coaching inquiries.</p>
        </div>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <label>
            Enter your first name*
            <input
              type="text"
              name="user_name"
              placeholder="Your first name here"
              value={formData.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.user_name && errors.user_name && <span className="error">{errors.user_name}</span>}
          </label>

          <label>
            Enter your Phone No*
            <input
              type="tel"
              name="user_phone"
              placeholder="Your phone number here"
              value={formData.user_phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.user_phone && errors.user_phone && <span className="error">{errors.user_phone}</span>}
          </label>

          <label>
            Enter your email address*
            <input
              type="email"
              name="user_email"
              placeholder="Your email address here"
              value={formData.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.user_email && errors.user_email && <span className="error">{errors.user_email}</span>}
          </label>

          <label>
            Enter your message here*
            <textarea
              name="message"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.message && errors.message && <span className="error">{errors.message}</span>}
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit your inquiry now'}
          </button>
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
