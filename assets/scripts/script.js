const navBars = document.querySelector(".nav_bars")
const navBarsXmarkIcon = document.querySelector(".fa-xmark")
const navBarsBarsIcon = document.querySelector(".fa-bars")
const navMenu = document.querySelector(".nav_menu")
const asideContent = document.querySelector(".aside_content")
const navCard = document.querySelector(".nav_card")
const asideClose = document.querySelector(".aside_close")

navBars.addEventListener("click",function () {
    navMenu.classList.toggle("dspBlock")
    navBarsXmarkIcon.classList.toggle("dspInline")
    navBarsBarsIcon.classList.toggle("dspNone")
})
navCard.addEventListener("click",function () {
    asideContent.classList.add("aside_scale")
})
asideClose.addEventListener("click",function () {
    asideContent.classList.remove("aside_scale")
})