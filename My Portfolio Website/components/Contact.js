import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact</h2>
        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className={styles.info}>
            <p>Email: <a href="mailto:aryantyagi2025@gmail.com">aryantyagi2025@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/Artyalert" target="_blank">github.com/Artyalert</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/artyalert" target="_blank">linkedin.com/in/artyalert</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
