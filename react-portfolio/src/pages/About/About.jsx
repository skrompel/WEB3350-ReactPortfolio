import React from "react";
import { Goal, GraduationCap, ClipboardCheck } from "lucide-react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>About Me</h1>

      <section className={styles.section}>
        <p className={styles.introText}>
          I am a senior cybersecurity and network management student at Weber
          State University, where I focus on building a strong foundation in
          networking and security concepts. Alongside my coursework, I serve as
          president of the WSU Cybersecurity Club, where I contribute to our
          club GitHub and help coordinate hands-on labs, challenges, and
          learning resources for other students.
        </p>
        <p className={styles.introText}>
          When I am not studying or working on projects you can find me spending
          time out in nature, working through a new guitar riff, getting lost in
          Viking Age and Wild West history, or taking on some CTF challenges.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Goal size={48} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Skills</h3>
            <ul className={styles.cardList}>
              <li>Operating Systems: Linux, macOS, Windows</li>
              <li>
                Networking & Security: OSI Model, TCP/IP, Network Monitoring,
                Firewall Configuration, Cisco Packet Tracer
              </li>
              <li>
                Security & Analysis: Wireshark, Nmap, Metasploit, SIEM Log
                Analysis (ELK), System Hardening.
              </li>
              <li>
                Programming & Scripting: Bash, Python, JavaScript, C++, Java
              </li>
              <li>Web Development: HTML, CSS, ReactJS</li>
              <li>
                Version Control: GitHub, Git Workflows, Repository Management,
                Collaborative Project Contribution
              </li>
              <li>Cloud & Virtualization: AWS, Azure, VMware, Virtual Box</li>
            </ul>
          </div>

          <div className={styles.card}>
            <GraduationCap size={48} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Education</h3>
            <div className={styles.cardText}>
              <strong>Weber State University</strong>
              <p className={styles.spacing}>
                <strong>BS</strong>, Cybersecurity and Network Management
                (Minor: Computer Science) <br />
                <small>August 2024 - April 2026</small>
              </p>
              <p className={styles.spacing}>
                <strong>AAS</strong>, Cybersecurity and Network Management
                (Minor: Computer Science) <br />
                <small>August 2024 - April 2025</small>
              </p>
              <p className={styles.spacing}>
                <strong>AS</strong>, General Studies <br />
                <small>August 2021 - April 2024</small>
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <ClipboardCheck size={48} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Certifications</h3>
            <div className={styles.cardText}>
              <p>
                <a href="https://www.credly.com/badges/fdebd40b-504a-4393-b3f2-2c4ca3ea41e2/">
                  <strong>CompTIA Security+</strong>
                </a>
              </p>
              <small>Exp. 2028</small>
              <p className={styles.spacing}>
                <a href="https://www.credly.com/badges/8509404d-6d13-44c7-bc57-7886ff216903/">
                  <strong>
                    GIAC Foundational Cybersecurity Technologies (GFACT)
                  </strong>
                </a>
                <br />
                <small>Exp. 2028</small>
              </p>
              <p className={styles.spacing}>
                <a href="https://www.credly.com/badges/4373dd84-4184-4d34-a007-96d37244e191/">
                  <strong>ISC2 Certified in Cybersecurity (CC)</strong>
                </a>
                <br />
                <small>Exp. 2027</small>
              </p>
              <p className={styles.spacing}>
                <a href="https://www.credly.com/badges/ac5f592a-171a-4cf7-ac47-63c9b782c13a/">
                  <strong>CompTIA A+</strong>
                </a>
                <br />
                <small>Exp. 2028</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
