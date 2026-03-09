document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav-wrap]");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var isOpen = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    document.querySelectorAll("[data-current-year]").forEach(function (node) {
        node.textContent = String(new Date().getFullYear());
    });
});
