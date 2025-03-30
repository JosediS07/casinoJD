document.addEventListener("DOMContentLoaded", function () {
    const submenuToggle = document.getElementById("toggle-submenu");
    const submenu = document.querySelector(".submenu");

    submenuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        submenu.classList.toggle("active");
    });

    // Cerrar el submenú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!submenu.contains(event.target) && event.target !== submenuToggle) {
            submenu.classList.remove("active");
        }
    });
});
