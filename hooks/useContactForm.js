'use client';

import { useState } from 'react';

// Handles submitting the contact form to /api/contact.
// status: 'idle' | 'sending' | 'success' | 'error'
export function useContactForm() {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setErrors({});

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setStatus('success');
        return;
      }
      setErrors(data.errors || {});
      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return { status, errors, submit };
}
