import React from "react";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Welcome</h2>
          <p className={styles.text}>
            Howdy! Thank you for stopping by. This site brings together a
            collection of my personal projects, labs, coursework highlights as
            well as exhibitions of my learning, the development of my skills,
            and progression within IT and cybersecurity. <br />
            You can learn more about me{" "}
            <a href="/about" className={styles.learnMore}>
              here
            </a>
            .
            <br /> If you have any questions or would like to reach out, you can
            contact me{" "}
            <a href="/contact" className={styles.learnMore}>
              here
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
