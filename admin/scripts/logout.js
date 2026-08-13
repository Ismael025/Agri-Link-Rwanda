  // Independent JavaScript: this page does not rely on shared JavaScript.
  window.addEventListener('DOMContentLoaded', function () {
    const toast = document.querySelector('.toast');
    const showToast = function (message) { if (!toast) return; toast.textContent = message; toast.classList.add('show'); window.clearTimeout(window.adminToastTimer); window.adminToastTimer = window.setTimeout(function () { toast.classList.remove('show'); }, 2300); };
    const toggle = document.querySelector('[data-action="toggle-nav"]');
    const close = document.querySelector('[data-action="close-nav"]');
    if (toggle) toggle.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
    if (close) close.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
    const currentDate = document.getElementById('currentDate');
    if (currentDate) currentDate.textContent = new Intl.DateTimeFormat('en-RW', { weekday:'long', day:'numeric', month:'long', year:'numeric' }).format(new Date());
    const rows = Array.from(document.querySelectorAll('#recordsTable tr'));
    const tableSearch = document.getElementById('tableSearch');
    const globalSearch = document.getElementById('globalSearch');
    const statusFilter = document.getElementById('statusFilter');
    const empty = document.getElementById('emptyState');
    const count = document.getElementById('recordCount');
    function filterRows() {
      const query = ((tableSearch && tableSearch.value) || (globalSearch && globalSearch.value) || '').toLowerCase().trim();
      const selected = statusFilter ? statusFilter.value.toLowerCase() : 'all';
      let visible = 0;
      rows.forEach(function (row) { const text = row.textContent.toLowerCase(); const matchQuery = !query || text.includes(query); const matchStatus = selected.startsWith('all') || text.includes(selected); const show = matchQuery && matchStatus; row.hidden = !show; if (show) visible += 1; });
      if (empty) empty.style.display = visible ? 'none' : 'block';
      if (count) count.textContent = 'Showing ' + visible + ' of ' + rows.length + ' demonstration records';
    }
    if (tableSearch) tableSearch.addEventListener('input', filterRows);
    if (globalSearch) globalSearch.addEventListener('input', function () { if (tableSearch) tableSearch.value = globalSearch.value; filterRows(); });
    if (statusFilter) statusFilter.addEventListener('change', filterRows);
    document.querySelectorAll('[data-row-action]').forEach(function (button) { button.addEventListener('click', function () { showToast(button.dataset.rowAction + ' selected. Backend record details will connect later.'); }); });
    document.querySelectorAll('[data-primary-action]').forEach(function (button) { button.addEventListener('click', function () { showToast(button.textContent.trim() + ' selected. This control is ready for backend connection.'); }); });
    document.querySelectorAll('[data-action="refresh"]').forEach(function (button) { button.addEventListener('click', function () { if (tableSearch) tableSearch.value = ''; if (globalSearch) globalSearch.value = ''; if (statusFilter) statusFilter.selectedIndex = 0; filterRows(); showToast('Records refreshed.'); }); });
    document.querySelectorAll('[data-action="download"]').forEach(function (button) { button.addEventListener('click', function () { showToast('Export prepared as a frontend demonstration.'); }); });
    document.querySelectorAll('[data-action="save"]').forEach(function (button) { button.addEventListener('click', function () { showToast('Changes saved in this frontend demonstration.'); }); });
    const confirmLogout = document.querySelector('[data-action="confirm-logout"]');
    if (confirmLogout) confirmLogout.addEventListener('click', function () { showToast('Signed out demonstration. Backend session handling will be added later.'); window.setTimeout(function () { window.location.href = 'admin-dashboard.html'; }, 1200); });
  });
