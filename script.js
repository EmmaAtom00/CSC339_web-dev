function scrollImage(direction) {
    const imageScroller = document.querySelector('.blog-img');
    const scrollAmount = 100; // Adjust the scroll distance as desired
  
    if (direction === 'left') {
      imageScroller.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      imageScroller.scrollLeft += scrollAmount;
    }
  }
  