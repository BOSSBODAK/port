import React from 'react';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>CONTACT ME</h2>
      <div className="contact-info">
        <div className="contact-item">
          <a 
            href="https://www.instagram.com/imrasseru/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={logo2} alt="Instagram" />
            <span>imrasseru</span>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <img src={logo4} alt="Email" />
            <span>llantero.russell1@gmail.com</span>
          </a>
        </div>
        <div className="contact-item">
          <a 
            href="https://www.facebook.com/russellroi.llantero/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={logo5} alt="Facebook" />
            <span>Russell Roi Llantero</span>
          </a>
        </div>
        <div className="contact-item">
          <a 
            href="https://github.com/imrasseru" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={logo3} alt="GitHub" />
            <span>imrasseru</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
