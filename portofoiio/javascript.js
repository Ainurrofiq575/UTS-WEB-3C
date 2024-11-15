document.addEventListener("DOMContentLoaded", function() {
    // Select the navbar toggle button and the menu collapse div
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Add a click event to toggle the "show" class on the collapse div
    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
});
