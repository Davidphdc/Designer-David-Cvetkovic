// JavaScript
// Get all the scroller items and anchor links
var items = document.querySelectorAll(".scroller-item");
var links = document.querySelectorAll(".anchor-menu a");

// Add a scroll event listener to the scroller container
var scroller = document.querySelector(".scroller-container");
scroller.addEventListener("scroll", function() {
  // Loop through the scroller items and check their position
  items.forEach(function(item) {
    // Get the item id and the corresponding link
    var itemId = item.getAttribute("id");
    var link = document.querySelector("[href='#" + itemId + "']");
    // Get the item top and bottom position relative to the viewport
    var rect = item.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;
    // If the item is in the viewport, add the active class to the link
    if (top >= 0 && bottom <= window.innerHeight) {
      link.classList.add("active");
    } else {
      // Otherwise, remove the active class from the link
      link.classList.remove("active");
    }
  });
});

// Add a click event listener to each anchor link
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    // Prevent the default action of the link
    event.preventDefault();
    // Get the target item id from the href attribute of the link
    var targetId = link.getAttribute("href");
    // Get the target item element
    var target = document.querySelector(targetId);
    // Scroll the scroller container to the target item
    scroller.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});
