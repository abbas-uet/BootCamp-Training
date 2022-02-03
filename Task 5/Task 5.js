const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeIcon =document.querySelector('.closeicon');

closeIcon.addEventListener('click',closeSideBar)

hamburger.addEventListener("click", openSideBar);

function openSideBar() {
    navMenu.classList.toggle("active");
}
function closeSideBar() {
    navMenu.classList.remove("active");
}
