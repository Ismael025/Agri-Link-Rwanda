const modal = document.getElementById("productModal");
const message = document.getElementById("message");

// Open and close the Add Product form.
document.getElementById("openFormButton").onclick = function () {
  modal.classList.add("show");
};

function closeForm() {
  modal.classList.remove("show");
}
document.getElementById("closeFormButton").onclick = closeForm;
document.getElementById("cancelButton").onclick = closeForm;

// Mobile sidebar.
document.getElementById("menuButton").onclick = function () {
  document.body.classList.add("menu-open");
};

document.getElementById("overlay").onclick = function () {
  document.body.classList.remove("menu-open");
};

// Show a short success message.
function showMessage(text) {
  message.textContent = text;
  message.classList.add("show");
  setTimeout(function () {
    message.classList.remove("show");
  }, 2000);
}

// Submit the demonstration product form.
document.getElementById("productForm").onsubmit = function (event) {
  event.preventDefault();
  showMessage("Product submitted for approval.");
  this.reset();
  closeForm();
};

// Search and filter product rows.
function filterProducts() {
  const search = document.getElementById("productSearch").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const status = document.getElementById("statusFilter").value;
  const rows = document.querySelectorAll("#productTable tr");
  let visibleProducts = 0;

  rows.forEach(function (row) {
    const matchesSearch = row.dataset.name.includes(search) || row.dataset.category.includes(search);
    const matchesCategory = category === "all" || row.dataset.category === category;
    const matchesStatus = status === "all" || row.dataset.status === status;
    const shouldShow = matchesSearch && matchesCategory && matchesStatus;

    row.style.display = shouldShow ? "table-row" : "none";
    if (shouldShow) visibleProducts++;
  });

  document.getElementById("emptyMessage").style.display = visibleProducts === 0 ? "block" : "none";
}

document.getElementById("productSearch").oninput = filterProducts;
document.getElementById("categoryFilter").onchange = filterProducts;
document.getElementById("statusFilter").onchange = filterProducts;

// Simple demonstration buttons.
document.querySelectorAll(".pause-button").forEach(function (button) {
  button.onclick = function () {
    showMessage(button.textContent === "Pause" ? "Product listing paused." : "Product listing activated.");
  };
});

document.querySelectorAll(".restock-button").forEach(function (button) {
  button.onclick = function () {
    showMessage("Restock option selected.");
  };
});

document.querySelectorAll(".delete-button").forEach(function (button) {
  button.onclick = function () {
    if (confirm("Are you sure you want to delete this product?")) {
      button.closest("tr").remove();
      showMessage("Product deleted.");
    }
  };
});
