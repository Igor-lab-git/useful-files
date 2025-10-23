
const box = document.querySelector("#box");
const buttonToggle = document.querySelector("#buttonToggle");

let isShow = false;

const toggleMenu = () => {
    isShow = !isShow;
    box.classList.toggle("isActive", isShow)
}

buttonToggle.addEventListener("click", toggleMenu)
toggleMenu()

console.log(isShow);
// console.log(toggleMenu());

