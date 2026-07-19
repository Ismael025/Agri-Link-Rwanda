const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const role = document.getElementById("role").value;

    if(role === "seller"){
        window.location.href = "../seller/html pages/farmer-dashboard.html";
    }

    else if(role === "buyer"){
        window.location.href = "../customer/page layout/buyer-dashboard.html";
    }

    else if(role === "admin"){
        window.location.href = "../admin/html pages/admin-dashboard.html";
    }

});