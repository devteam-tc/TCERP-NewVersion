'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add API integration here
  };

  return (
    <div className="contact-container">
      <div className="image-side">
        <img src="/images/contact-us.jpg" alt="contact" />
        
      </div>
      <div className="form-side">
        <h3>Connect with Us</h3>
        <p>
          Have questions or want to discuss a project? Fill out the form below and we’ll get back to you soon.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              required
            />
          </label>

          <label>
            Phone Number (Optional)
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message here..."
              rows="4"
              required
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
