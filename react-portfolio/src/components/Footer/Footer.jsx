import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © 2025 Sahara Yasmin Krompel | DxxmTxch
      </p>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/skrompel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} className={styles.icon} />
        </a>
        <a
          href="https://linkedin.com/saharakrompel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} className={styles.icon} />
        </a>
        <a href="mailto:saharakrompel@protonmail.com" aria-label="Email">
          <Mail size={24} className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
