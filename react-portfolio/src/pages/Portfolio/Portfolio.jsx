import React, { useState } from "react";
import { X } from "lucide-react";
import { portfolioData } from "../../data/portfolioData.jsx";
import styles from "./Portfolio.module.css";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Projects & Arsenal</h1>

      <div className={styles.grid}>
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => openModal(item)}
          >
            <div className={styles.cardImage}>{item.icon}</div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.techStack}>
                {item.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <p className={styles.clickPrompt}>Click to learn more</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={24} />
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{selectedProject.icon}</div>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
            </div>

            <div className={styles.modalBody}>
              <section className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Overview</h3>
                <p className={styles.modalText}>
                  {selectedProject.fullDescription}
                </p>
              </section>

              <section className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Key Features</h3>
                <ul className={styles.featureList}>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Technologies</h3>
                <div className={styles.techStack}>
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Links</h3>
                <a href={selectedProject.links} className={styles.modalText}>
                  {selectedProject.links}
                </a>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
