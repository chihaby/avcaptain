import styles from './AboutBio.module.css';

// TODO: replace the placeholder text and the photo block with your own.
export default function AboutBio() {
  return (
    <div className={styles.bio}>
      <div className={styles.photo} role="img" aria-label="Photo of the owner (placeholder)">
        Your photo here
      </div>
      <div>
        <h3>Hi, my name is Radouane, but you can call me Rad.</h3>
        <p>
          I&apos;m a freelance audio professional based in the Bay Area. I help companies run
          meetings where everyone can hear and be heard.
        </p>
        <p>
          Your meeting only works if everyone can hear it, and you shouldn{"’"}t have to think about the audio to get there. After years of setting up corporate meetings and events, including work for Google, Datadog, MeterLabs, and Rippling, the setup you get has already been tested in rooms like yours. If you{"’"}d like to keep the session, a video recording and editing package is available, so you walk away with something ready to share. No two events are the same, so you won{"’"}t get a one-size-fits-all package. Tell me what you need the day to look like, and everything gets built around that.
        </p>
      </div>
    </div>
  );
}
