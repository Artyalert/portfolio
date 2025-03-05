import { useState } from 'react';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Disease Prediction',
      description: 'A machine learning model for predicting diseases based on symptoms.',
      details: 'Detailed description about how the disease prediction model works, technologies used, and results.'
    },
    {
      id: 2,
      title: 'Text Summarization',
      description: 'An NLP-based system to generate concise summaries from long texts.',
      details: 'Detailed explanation of the text summarization project, techniques used, and outcomes.'
    },
    {
      id: 3,
      title: 'Fake News Detection',
      description: 'An AI-powered system to detect and classify fake news articles.',
      details: 'In-depth overview of the fake news detection project, including methodologies and accuracy metrics.'
    }
  ];

  const openModal = (project) => {
    setModalContent(project);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button onClick={() => openModal(project)}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
      {modalContent && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.details}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
