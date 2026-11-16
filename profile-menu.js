const navAvatar = document.getElementById("nav-avatar");
const userMenu = document.querySelector(".user-menu");
const dropdown = document.getElementById("dropdown");

navAvatar.addEventListener("click", (event) => {
    event.stopPropagation(); // Et menüü kohe ei sulguks teise kuulaja pärast
    dropdown.classList.toggle("open");
});

// Menüü sulgub kui klikitakse kuskile mujale
document.addEventListener("click", (event) => {
    if (!userMenu.contains(event.target)) {
        dropdown.classList.remove("open");
    }
});
