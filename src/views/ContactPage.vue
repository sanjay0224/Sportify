<template>
    <div class="contact-container">
      <h2>Contact Us</h2>
      <p>Have a question, feedback, or collaboration request? We'd love to hear from you!</p>
  
      <div class="contact-info">
        <p><strong>🏢 Address:</strong> Sportify HQ, 5th Floor, Victory Tower, Coimbatore, Tamil Nadu, 641001</p>
        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
        <p><strong>📧 Email:</strong> support@sportifyhub.com</p>
        <p><strong>⏰ Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM</p>
      </div>
  
      <div class="contact-form">
        <h3>Send us a message</h3>
        <form @submit.prevent="handleSubmit">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  function handleSubmit() {
    alert('Your message has been sent successfully!');
  }
  </script>
  
  <style scoped>
  .contact-container {
    background-color: #111;
    color: #fff;
    padding: 40px 20px;
    max-width: 900px;
    margin: auto;
  }
  
  .contact-info p {
    margin: 10px 0;
    line-height: 1.6;
  }
  
  .contact-form {
    margin-top: 30px;
    background-color: #222;
    padding: 20px;
    border-radius: 10px;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    background: #333;
    border: none;
    color: #fff;
    border-radius: 5px;
  }
  
  .contact-form button {
    background-color: #f1c40f;
    color: #000;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .contact-form button:hover {
    background-color: #d4ac0d;
  }
  </style>
  