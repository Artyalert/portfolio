import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Aryan Tyagi</div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#publications">Publications</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li>
            <a href="/Aryan_Tyagi_Resume.pdf" target="_blank" className={styles.resumeBtn}>
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
