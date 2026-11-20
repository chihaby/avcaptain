import { eventTypes } from '@/lib/content';

// Fields shown in the contact form. Keep ids in sync with app/api/contact/route.js.
export const contactFields = [
  { id: 'name', label: 'Your name', required: true, autoComplete: 'name' },
  { id: 'company', label: 'Company', autoComplete: 'organization' },
  { id: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { id: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { id: 'eventType', label: 'Type of event', as: 'select', options: eventTypes },
  { id: 'eventDate', label: 'Rough event date', type: 'date' },
  {
    id: 'callTimes',
    label: 'Best times for a call',
    hint: 'For example: weekday mornings',
  },
  { id: 'message', label: 'Anything else I should know?', as: 'textarea' },
];
