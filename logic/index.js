
//start loding
const loding = document.querySelector(".container-loding")
window.onload = function (){
    loding.style.display = 'none'
}
//end loding
//start scroll to top  
let btnScroll = document.querySelector(".btn-Scroll");
window.onscroll =function (){
    if (window.scrollY >= 400){
        btnScroll.style.display = "block"
    } else{
        btnScroll.style.display = "none"
    }
}
btnScroll.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
//end scroll to top 
//start menu
const IconMenu = document.querySelector(".icon-menu")
const menu = document.querySelector(".navigation")
const closeMenu = document.querySelector(".close-menu")
let statemenu = false
const close = ()=>{
    menu.style.left = "-550px"
        statemenu = false
}
const open = ()=>{
    menu.style.left = "0"
    statemenu = true
}
IconMenu.onclick = function(){
    if(statemenu === false){
        open()
    }else{
        close()
    }
}
closeMenu.onclick = function(){
    close()
}
//end menu
//start date
const date = new Date()
let paragraph = document.querySelector(".footer-title")
let text = document.createTextNode(`copyritght ©${date.getFullYear()} mohamed saad`)
paragraph.appendChild(text)
// end date 
//data