import React from 'react'
import { useRef } from 'react';
import './contact.css'
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3s4bwb2', 'template_r5trngr', form.current, 'mpfjak_IOQp_gdlh_')
    e.target.reset();
    };

  return (
    <>
    <div className="container contact_container">
      <h1 className="contact_title">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        
          <label htmlFor='name'>Name</label>
          <input type="text" id="name" name="name" required/>
        
       
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor='message'>Message</label>
        <textarea id="message" name="message" required/>
        <button id="btn" type='submit'>Submit</button>
      </form>
    </div>
    
  </>

  );
};

export default Contact;