import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <p>
          I am a results-driven Software Engineer experienced in building scalable web applications, cloud integrations, and robust API services.
          I hold a Master’s in Computer Applications from Chandigarh University and a Bachelor’s in Computer Applications from Shobhit University.
        </p>
        <p>
          My passion is leveraging technical skills to deliver innovative solutions that improve functionality and efficiency.
        </p>
      </div>
    </section>
  );
}
