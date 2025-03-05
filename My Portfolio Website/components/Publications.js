import styles from '../styles/Publications.module.css';

export default function Publications() {
  return (
    <section id="publications" className={styles.publications}>
      <div className={styles.container}>
        <h2>Publications</h2>
        <div className={styles.card}>
          <h3>Review Of Parkease: A Revolution in Urban Parking Management</h3>
          <p>Published in IJEREAS, 2024.</p>
          <a href="https://drive.google.com/file/d/1K9j_eN8Stam_t-uBTct_vFnAIkzOwh3R/view?usp=sharing" target="_blank">
            Read Publication
          </a>
        </div>
      </div>
    </section>
  );
}
