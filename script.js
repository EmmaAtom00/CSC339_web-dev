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
