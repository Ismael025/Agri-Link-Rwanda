// Independent JavaScript for marketplace.html.

const body = document.body;
const menuButton = document.getElementById("menuButton");
const overlay = document.getElementById("overlay");

if (menuButton) menuButton.onclick = () => body.classList.add("menu-open");
if (overlay) overlay.onclick = () => body.classList.remove("menu-open");

function showToast(text) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-message]").forEach(button => {
  button.onclick = () => showToast(button.dataset.message);
});

document.querySelectorAll("[data-open]").forEach(button => {
  button.onclick = () => document.getElementById(button.dataset.open).classList.add("show");
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.onclick = () => document.getElementById(button.dataset.close).classList.remove("show");
});

document.querySelectorAll(".demo-form").forEach(form => {
  form.onsubmit = event => {
    event.preventDefault();
    showToast(form.dataset.success || "Information saved successfully.");
  };
});

document.querySelectorAll(".tabs").forEach(tabBar => {
  tabBar.querySelectorAll(".tab").forEach(tab => {
    tab.onclick = () => {
      const panel = tabBar.parentElement;
      panel.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
      panel.querySelectorAll(".tab-content").forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      const target = panel.querySelector("#" + tab.dataset.tab);
      if (target) target.classList.add("active");
    };
  });
});

document.querySelectorAll("[data-filter-table]").forEach(input => {
  input.oninput = () => {
    const table = document.getElementById(input.dataset.filterTable);
    const value = input.value.toLowerCase();
    table.querySelectorAll("tbody tr").forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(value) ? "table-row" : "none";
    });
  };
});

document.querySelectorAll("[data-status-filter]").forEach(select => {
  select.onchange = () => {
    const table = document.getElementById(select.dataset.statusFilter);
    table.querySelectorAll("tbody tr").forEach(row => {
      row.style.display = select.value === "all" || row.dataset.status === select.value ? "table-row" : "none";
    });
  };
});

const chatForm = document.getElementById("chatForm");
if (chatForm) {
  chatForm.onsubmit = event => {
    event.preventDefault();
    const input = document.getElementById("chatInput");
    if (!input.value.trim()) return;
    const bubble = document.createElement("div");
    bubble.className = "bubble mine";
    bubble.textContent = input.value;
    document.getElementById("messages").appendChild(bubble);
    input.value = "";
  };
}

document.querySelectorAll(".delete-row").forEach(button => {
  button.onclick = () => {
    if (confirm("Are you sure you want to remove this item?")) {
      button.closest("tr").remove();
      showToast("Item removed.");
    }
  };
});

document.querySelectorAll(".favorite").forEach(button => {
  button.onclick = () => {
    button.textContent = button.textContent.trim() === "♡" ? "♥" : "♡";
    showToast(button.textContent === "♥" ? "Product saved." : "Product removed from saved items.");
  };
});

document.querySelectorAll(".add-cart").forEach(button => {
  button.onclick = () => {
    const count = document.getElementById("cartCount");
    if (count) count.textContent = Number(count.textContent || 0) + 1;
    showToast("Product added to cart.");
  };
});

document.querySelectorAll(".quantity").forEach(box => {
  const input = box.querySelector("input");
  box.querySelector(".minus").onclick = () => input.value = Math.max(1, Number(input.value) - 1);
  box.querySelector(".plus").onclick = () => input.value = Number(input.value) + 1;
});


// Script extracted from the original HTML page.
document.getElementById('marketSearch').oninput=function(){const v=this.value.toLowerCase();document.querySelectorAll('#productGrid .product-card').forEach(p=>p.style.display=p.dataset.product.includes(v)?'block':'none');};
