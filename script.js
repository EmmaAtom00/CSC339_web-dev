function scrollImage(direction) {
  const content = document.querySelector('.blog-img');
  var scrollWidth = content.scrollWidth;
  var clientWidth = content.clientWidth;

  // Calculate the distance to scroll
  var scrollDistance = scrollWidth - clientWidth;

  // Define the scroll direction and scroll amount
  var scrollAmount = 0;
  if (direction === 'left') {
    scrollAmount = -scrollDistance;
  } else if (direction === 'right') {
    scrollAmount = scrollDistance;
  }

  // Animate the scrolling process
  var startTime = performance.now();
  var duration = 1000; // Scroll animation duration in milliseconds

  function scrollStep(timestamp) {
    var currentTime = timestamp - startTime;
    var scrollRatio = currentTime / duration;
    var currentScrollAmount = Math.easeInOutQuad(scrollRatio) * scrollAmount;
    content.scrollLeft = currentScrollAmount;

    if (currentTime < duration) {
      // Continue scrolling until the duration is over
      requestAnimationFrame(scrollStep);
    }
  }

  // Easing function for smooth scrolling
  Math.easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  // Start the scrolling animation
  requestAnimationFrame(scrollStep);
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

open.onclick = function () {
  nav.classList.toggle("active");
}

function scrollImage2(scrollAmount) {
  var content = document.querySelector('.blogg-img');
  var startTime = performance.now();
  var duration = 1000; // Scroll animation duration in milliseconds

  function scrollStep(timestamp) {
    var currentTime = timestamp - startTime;
    var scrollRatio = currentTime / duration;
    var currentScrollAmount = Math.easeInOutQuad(scrollRatio) * scrollAmount;
    content.scrollLeft += currentScrollAmount;

    if (currentTime < duration) {
      // Continue scrolling until the duration is over
      requestAnimationFrame(scrollStep);
    }
  }

  // Easing function for smooth scrolling
  Math.easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  // Start the scrolling animation
  requestAnimationFrame(scrollStep);

}
