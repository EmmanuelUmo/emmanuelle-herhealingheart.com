/* ---------- Mobile nav ---------- */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;
  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', body.classList.contains('nav-open'));
    });
    document.querySelectorAll('.nav-links a').forEach(a =>
      a.addEventListener('click', () => body.classList.remove('nav-open'))
    );
  }
})();

/* ---------- Scroll reveal ---------- */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => io.observe(e));
})();

/* ---------- Contact form (front-end demo handling) ---------- */
(function () {
  const form = document.querySelector('form[data-contact]');
  if (!form) return;
  const RECIPIENT = 'emmanuelle@herhealingheart.com';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const nameEl = form.querySelector('#name');
    const orgEl = form.querySelector('#org');
    const typeEl = form.querySelector('#type');
    const msgEl = form.querySelector('#message');
    const name = nameEl ? nameEl.value.trim() : '';
    const message = msgEl ? msgEl.value.trim() : '';

    // Validation
    if (!name) {
      status.textContent = 'Please add your name so Emmanuelle knows who she is speaking with.';
      status.className = 'form-status';
      if (nameEl) nameEl.focus();
      return;
    }
    if (!message) {
      status.textContent = 'Please add a short message before sending.';
      status.className = 'form-status';
      if (msgEl) msgEl.focus();
      return;
    }

    // Build the email to emmanuelle@herhealingheart.com
    const org = orgEl ? orgEl.value.trim() : '';
    const type = typeEl ? typeEl.value : '';
    const subject = 'Website enquiry: ' + type + ' (from ' + name + ')';
    const body = [
      'Name: ' + name,
      'Organisation: ' + (org || 'Not provided'),
      'Enquiry type: ' + type,
      '',
      message
    ].join('\n');
    const href = 'mailto:' + RECIPIENT +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    status.textContent = 'Thank you, ' + name.split(' ')[0] +
      '. Opening your email app to send your message to Emmanuelle.';
    status.className = 'form-status ok';
    window.location.href = href;
  });
})();

/* ---------- Footer year ---------- */
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
