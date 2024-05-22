const menu=document.querySelector("#mobile-menu")
const menuLinks=document.querySelector(".navbar_menu")

const mobleMenu=()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener("click",mobleMenu);