const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Trims every expected field and returns { values, errors }.
export function validateContact(form) {
  const get = (key, max = 500) => String(form.get(key) ?? '').trim().slice(0, max);
  const values = {
    name: get('name', 100),
    company: get('company', 100),
    email: get('email', 200),
    phone: get('phone', 40),
    eventType: get('eventType', 100),
    eventDate: get('eventDate', 20),
    callTimes: get('callTimes', 200),
    message: get('message', 2000),
  };

  const errors = {};
  if (!values.name) errors.name = 'Please enter your name.';
  if (!EMAIL.test(values.email)) errors.email = 'Please enter a valid email address.';

  return { values, errors };
}
