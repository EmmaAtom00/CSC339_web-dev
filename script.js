function scrollImage(direction) {
    const imageScroller = document.querySelector('.blog-img');
    const scrollAmount = 100; // Adjust the scroll distance as desired
  
    if (direction === 'left') {
      imageScroller.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      imageScroller.scrollLeft += scrollAmount;
    }
  }
  

const open = document.querySelector('.seemore-text');
const nav = document.querySelector('.row-2');

open.onclick = function() {
    nav.classList.toggle("active");
}

var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")
const button = document.querySelector('.get-started');
const formBox = document.querySelector('.form-box');
const shapeImg = document.querySelector('.shape-img');

button.addEventListener('click', () => {
    shapeImg.classList.add('none');
    formBox.classList.add('show');
});

function register(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "110px";
    
}
function login(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "0"; 
}