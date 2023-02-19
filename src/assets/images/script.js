const cancel = document.querySelector('.cancel');
const menu = document.querySelector('.bars');
const navlinks = document.querySelector('.navlinks');
const readmore = document.querySelector('#more');
const btnread = document.querySelector('#readmore'),
    more_content = document.querySelector("#readmore-content"),
    less_content = document.querySelector("#readless-content"),
    popup = document.querySelector(".popup"),
    popup_cancel = document.querySelector(".popup-cancel"),
    homebody = document.querySelector(".homebody"),
readless = document.querySelector('#readless');





menu.onclick = () => {
    navlinks.classList.add("nav-active");
};
cancel.onclick = () => {
    navlinks.classList.remove("nav-active");
}


const mybutton = document.querySelector(".myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

try 
{btnread.addEventListener('click', () => {
    readmore.style.display = "flex";
    more_content.style.display = 'none';
    less_content.style.display = "block"
})
readless.addEventListener('click', () => {
    readmore.style.display = "none";
    more_content.style.display = 'block';
    less_content.style.display = "none"
})}

catch(error){
    console.log(error)
}

try{function popupfun() {
    popup.classList.add("popup-active")
}

popup_cancel.addEventListener("click", () => {
    popup.classList.remove("popup-active")
})}
catch(error){
    console.log(error)
}