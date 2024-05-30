import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactme.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Map form data to the template parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email_id: formData.email,
      message: formData.message
    };

    emailjs.send('service_hsgmail', 'template_ffw81eh', templateParams, '8AAjodiUx10eHbyKY')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <section id="contactme">
      <h2>Contact Us</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
