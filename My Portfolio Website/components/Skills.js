import styles from '../styles/Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2>Skills</h2>
        <div className={styles.skillGrid}>
          <div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React, Next.js</p>
          </div>
          <div>
            <h3>Backend</h3>
            <p>Java, Spring Boot, Python, SQL</p>
          </div>
          <div>
            <h3>Cloud & DevOps</h3>
            <p>AWS, Cloud Integrations, DevOps Fundamentals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
