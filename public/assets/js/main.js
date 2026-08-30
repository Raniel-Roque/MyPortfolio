window.handleContactSubmit = function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const name = (form.name.value || '').trim();
  const email = (form.email.value || '').trim();
  const message = (form.message.value || '').trim();

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:raniel.christian.roque@gmail.com?subject=${subject}&body=${body}`;
  return false;
};