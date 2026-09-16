(() => {
  'use strict';
  const form = document.querySelector('#brief-form');
  if (!form) return;
  const button = form.querySelector('button');
  const status = document.querySelector('#brief-status');
  button.hidden = false;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const name = String(fields.get('firstName')).trim();
    const company = String(fields.get('company')).trim();
    if (!name || !company) {
      status.textContent = 'Please enter your first name and company.';
      return;
    }
    const body = `Hi Alex,\r\n\r\nPlease send me the CEO AI Readiness Brief: 7 Questions Every CEO Should Ask Before Scaling AI.\r\n\r\nFirst name: ${name}\r\nBusiness email: ${String(fields.get('email')).trim()}\r\nCompany: ${company}\r\n\r\nMy AI question or business process (optional):\r\n`;
    const subject = 'Request: CEO AI Readiness Brief';
    window.location.href = `mailto:Alex.kalambata@dexaventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Review and send the request in your email app. If it did not open, email Alex.kalambata@dexaventures.com directly.';
  });
})();
