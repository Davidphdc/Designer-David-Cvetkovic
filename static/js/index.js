
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


window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


var tabs = document.querySelectorAll(".tab");
var contents = document.querySelectorAll(".content");


tabs.forEach(function(tab) {
  tab.addEventListener("click", function(event) {
   
    event.preventDefault();
    
    var contentId = tab.getAttribute("data-content");

    var content = document.getElementById(contentId);
    
    tabs.forEach(function(tab) {
      tab.classList.remove("active");
    });
    contents.forEach(function(content) {
      content.classList.remove("active");
    });
    
    tab.classList.add("active");
    content.classList.add("active");
  });
});


var items = document.querySelectorAll(".scroller-item");
var links = document.querySelectorAll(".anchor-menu a");


var scroller = document.querySelector(".scroller-container");
scroller.addEventListener("scroll", function() {

  items.forEach(function(item) {
    
    var itemId = item.getAttribute("id");
    var link = document.querySelector("[href='#" + itemId + "']");
   
    var rect = item.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;
    
    if (top >= 0 && bottom <= window.innerHeight) {
      link.classList.add("active");
    } else {
     
      link.classList.remove("active");
    }
  });
});


links.forEach(function(link) {
  link.addEventListener("click", function(event) {

    event.preventDefault();
  
    var targetId = link.getAttribute("href");
 
    var target = document.querySelector(targetId);
    
    scroller.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});