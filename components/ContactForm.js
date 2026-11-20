'use client';

import { site } from '@/lib/site';
import { contactFields } from '@/lib/fields';
import { useContactForm } from '@/hooks/useContactForm';
import FormField from '@/components/FormField';
import Button from '@/components/Button';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { status, errors, submit } = useContactForm();

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <h3>Thank you. Your request was sent.</h3>
        <p>{site.replyTime} I will follow up to set up a time to talk.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <p className={styles.note}>Fields marked * are required. No payment needed.</p>
      {contactFields.map((field) => (
        <FormField key={field.id} {...field} error={errors[field.id]} />
      ))}
      <div className={styles.trap} aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status === 'error' && !Object.keys(errors).length && (
        <p className={styles.problem} role="alert">
          Sorry, something went wrong. Please try again or call {site.phone}.
        </p>
      )}
      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Request a Call'}
      </Button>
    </form>
  );
}
