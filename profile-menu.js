const navAvatar = document.getElementById("nav-avatar");
const userMenu = document.querySelector(".user-menu");
const dropdown = document.getElementById("dropdown");

navAvatar.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("open");
});

document.addEventListener("click", (event) => {
    if (!userMenu.contains(event.target)) {
        dropdown.classList.remove("open");
    }
});
