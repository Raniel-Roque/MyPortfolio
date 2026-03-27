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

(function lightbox() {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  let lastActive = null;

  function open(src, alt, text) {
    if (!src) return;
    lastActive = document.activeElement;
    img.src = src;
    img.alt = alt || '';
    if (caption) caption.textContent = text || '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    img.removeAttribute('src');
    if (caption) caption.textContent = '';
    if (lastActive && typeof lastActive.focus === 'function') lastActive.focus();
    lastActive = null;
  }

  document.addEventListener('click', function (e) {
    const a = e.target && e.target.closest ? e.target.closest('a.js-lightbox') : null;
    if (a) {
      e.preventDefault();
      const nestedImg = a.querySelector('img');
      const alt = nestedImg ? nestedImg.getAttribute('alt') : a.getAttribute('aria-label');
      open(a.getAttribute('href'), alt, '');
      return;
    }

    const triggerImg = e.target && e.target.closest ? e.target.closest('img[data-lightbox-src]') : null;
    if (triggerImg) {
      e.preventDefault();
      open(triggerImg.getAttribute('data-lightbox-src') || triggerImg.getAttribute('src'), triggerImg.getAttribute('alt'), '');
      return;
    }

    const closeEl = e.target && e.target.closest ? e.target.closest('[data-lightbox-close]') : null;
    if (closeEl && modal.classList.contains('is-open')) {
      e.preventDefault();
      close();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
})();
