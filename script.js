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

function scrollImage(direction) {
  const imageScroller = document.querySelector('.blogg-img');
  const scrollAmount = 100; // Adjust the scroll distance as desired

  if (direction === 'left') {
    imageScroller.scrollLeft -= scrollAmount;
  } else if (direction === 'right') {
    imageScroller.scrollLeft += scrollAmount;
  }
}
