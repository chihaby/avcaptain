import Link from 'next/link';
import styles from './Button.module.css';

// Renders a link when `href` is given, otherwise a real <button>.
// variant: 'primary' | 'outline' | 'inverse' (inverse is for dark backgrounds)
export default function Button({ href, variant = 'primary', children, ...rest }) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
