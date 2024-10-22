import React from 'react';
import './contact.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Our Contact Us</h2>
      <p>Easy to contact us. We are always ready to help by providing the best services for you. We believe a good place to live can make your life better.</p>
      
      <div className="contact-methods">
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <div>
            <h3>Call</h3>
            <p>021 123 145 14</p>
            <button>Call now</button>
          </div>
        </div>
        
        <div className="contact-item">
          <i className="fas fa-comments"></i>
          <div>
            <h3>Chat</h3>
            <p>021 123 145 14</p>
            <button>Chat now</button>
          </div>
        </div>
        
        <div className="contact-item">
          <i className="fas fa-video"></i>
          <div>
            <h3>Video Call</h3>
            <p>021 123 145 14</p>
            <button>Video Call now</button>
          </div>
        </div>
        
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h3>Message</h3>
            <p>021 123 145 14</p>
            <button>Message now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
