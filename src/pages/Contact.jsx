import React, { useState } from 'react';

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here I would send the form data to a server
    console.log(contactForm);
    alert('Form submitted. Thank you!');
    // Reset form after submission
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h2 className='contact-me'>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className='contact-name'>
          <label htmlFor="name">Name:</label>
          <input className='message-box'
            type="text"
            id="name"
            name="name"
            value={contactForm.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='contact-name'>
          <label htmlFor="email">Email:</label>
          <input className='message-box'
            type="email"
            id="email"
            name="email"
            value={contactForm.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='contact-name'>
          <label htmlFor="message" className='message'>Message:</label>
          <textarea className='message-box'
            id="message"
            name="message"
            value={contactForm.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='btn-container'>
        <button type="submit" className='submit-btn'>Submit</button>
        </div>
      </form>
      <div className='below-contact'>
        Or use the links in the footer to connect with me!
      </div>
    </div>
  );
}

export default Contact;
