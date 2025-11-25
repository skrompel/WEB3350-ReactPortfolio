import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Message sent! (Check console for data)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Send a Message</h1>

      <p className={styles.introText}>Reach out through the form below.</p>

      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={handleSubmit} className={styles.button}>
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
}

export default Contact;
