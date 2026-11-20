import styles from './AboutBio.module.css';

// TODO: replace the placeholder text and the photo block with your own.
export default function AboutBio() {
  return (
    <div className={styles.bio}>
      <div className={styles.photo} role="img" aria-label="Photo of the owner (placeholder)">
        Your photo here
      </div>
      <div>
        <h3>Hi, I&apos;m [Your Name]</h3>
        <p>
          I&apos;m a freelance audio professional based in the Bay Area. I help companies run
          meetings where everyone can hear and be heard.
        </p>
        <p>
          [Add your background, years of experience, and the kinds of venues and clients you
          have worked with.]
        </p>
      </div>
    </div>
  );
}
