import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Hi, I'm Aryan Tyagi</h1>
        <p>Software Engineer | Cloud & API Enthusiast</p>
        <a href="#projects" className={styles.cta}>View My Work</a>
      </div>
    </section>
  );
}
