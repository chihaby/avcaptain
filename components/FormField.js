import styles from './FormField.module.css';

// One labelled form control: input, textarea, or select.
export default function FormField({ id, label, error, hint, as = 'input', options = [], required, ...rest }) {
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  const props = {
    id,
    name: id,
    required,
    className: styles.control,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    ...rest,
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {hint && <p id={`${id}-hint`} className={styles.hint}>{hint}</p>}
      {as === 'textarea' && <textarea rows={4} {...props} />}
      {as === 'select' && (
        <select {...props}>
          <option value="">Choose one</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      )}
      {as === 'input' && <input {...props} />}
      {error && <p id={`${id}-error`} className={styles.error}>{error}</p>}
    </div>
  );
}
