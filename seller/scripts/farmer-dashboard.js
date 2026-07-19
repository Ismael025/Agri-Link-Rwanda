// Independent JavaScript for farmer-dashboard.html.

window.addEventListener('DOMContentLoaded', () => {
      
      const toast = document.querySelector('.toast');
      const showToast = message => { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2300); };
      document.querySelector('[data-action="toggle-nav"]').addEventListener('click', () => document.body.classList.toggle('nav-open'));
      document.querySelector('[data-action="close-nav"]').addEventListener('click', () => document.body.classList.remove('nav-open'));
      document.querySelectorAll('[data-target]').forEach(button => button.addEventListener('click', () => { const page = button.dataset.target; showToast(`${button.textContent.trim()} selected — ${page} will be connected when that page is built.`); }));
      document.querySelector('[data-action="notify"]').addEventListener('click', () => document.querySelector('.notifications').scrollIntoView({behavior:'smooth'}));
      document.querySelector('[data-action="profile"]').addEventListener('click', () => showToast('Profile menu will connect to the Profile page.'));
      document.getElementById('siteSearch').addEventListener('keydown', event => { if (event.key === 'Enter') showToast(`Searching for “${event.currentTarget.value || 'all records'}”`); });
      document.getElementById('currentDate').textContent = new Intl.DateTimeFormat('en-RW',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date());
    });
