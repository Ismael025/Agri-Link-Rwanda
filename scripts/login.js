const loginForm = document.getElementById("loginForm");
const roleInput = document.getElementById("role");

const dashboardPaths = {
  buyer: "../customer/page layout/buyer-dashboard.html",
  seller: "../seller/pages/farmer-dashboard.html",
  admin: "../admin/pages/admin-dashboard.html"
};

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedRole = roleInput.value;
  const destination = dashboardPaths[selectedRole];

  if (!destination) {
    alert("Please select your role.");
    return;
  }

  window.location.assign(destination);
});