const icon=document.querySelector(".menu-bar");
const menu=document.querySelector(".slide-menu");
icon.onclick=function(){
    icon.classList.toggle("active");
    menu.classList.toggle("active");
}
AOS.init();