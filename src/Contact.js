import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <section id="contact1">
    <div className="contact">
       <h1>Contact</h1>
      <div className="container">
  
       
        <form className="contact__form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button className='send' type="submit"><a  href="https://mail.google.com/mail/u/0/#inbox">Send</a></button>
        </form>
      </div>
    </div>
    </section>
  );
}

export default Contact;