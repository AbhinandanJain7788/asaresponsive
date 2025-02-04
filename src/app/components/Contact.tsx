"use client";
import './Contact.css'
export default function Contact() {
  return (
    <div className="contact-us-first">
      <div className="contact-us-box">
        <div className="contact-container">
          <h2>CONTACT INFO</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email*" />
          <textarea placeholder="What are your educational goals?" rows={4}></textarea>
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
}
