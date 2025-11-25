import React, { useState, useEffect } from "react";
import { Shield, Network, Server, ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.hero}>
      <div
        className={styles.heroBackground}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className={styles.heroPattern} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Sahara Yasmin Krompel</h1>
        <p className={styles.heroSubtitle}>
          Cybersecurity & Network Management Student
        </p>
        <div className={styles.iconContainer}>
          <Shield size={40} className={styles.icon} />
          <Network size={40} className={styles.icon} />
          <Server size={40} className={styles.icon} />
        </div>
      </div>
      <div className={styles.scrollIndicator} onClick={scrollToContent}>
        <ChevronDown size={40} />
      </div>
    </div>
  );
}

export default Hero;
