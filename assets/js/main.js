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

(function themeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const iconSun = document.getElementById('iconSun');
  const iconMoon = document.getElementById('iconMoon');

  function isDark() {
    return root.classList.contains('dark');
  }

  function setLabel() {
    const dark = isDark();
    if (iconSun) iconSun.style.display = dark ? 'none' : 'block';
    if (iconMoon) iconMoon.style.display = dark ? 'block' : 'none';
  }

  function setTheme(next) {
    if (next === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    setLabel();
  }

  btn.addEventListener('click', function () {
    setTheme(isDark() ? 'light' : 'dark');
  });

  setLabel();
})();

(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
