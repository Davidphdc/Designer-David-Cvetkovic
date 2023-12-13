
// Menu overlay close btn
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const hidenav = document.getElementById("hidenav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  menuBtn.classList.add("displaynone");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  menuBtn.classList.remove("displaynone");
});

hidenav.addEventListener("click", () => {
  hidenav.classList.remove("active");
  menuBtn.classList.remove("displaynone");
});


const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav_link').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  
  }
});



// STICK SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// JavaScript
// Get all the tabs and content divs
var tabs = document.querySelectorAll(".tab");
var contents = document.querySelectorAll(".content");

// Loop through the tabs and add a click event listener to each one
tabs.forEach(function(tab) {
  tab.addEventListener("click", function(event) {
    // Prevent the default action of the link
    event.preventDefault();
    // Get the content id from the data-content attribute of the tab
    var contentId = tab.getAttribute("data-content");
    // Get the content div that matches the content id
    var content = document.getElementById(contentId);
    // Remove the active class from all the tabs and content divs
    tabs.forEach(function(tab) {
      tab.classList.remove("active");
    });
    contents.forEach(function(content) {
      content.classList.remove("active");
    });
    // Add the active class to the clicked tab and the corresponding content div
    tab.classList.add("active");
    content.classList.add("active");
  });
});






