
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
    console.log(link);
  }
});



// STICK SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});






// Recapcha

function onSubmit(token) {
  document.getElementById("cform").submit();
}


function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
    });
  });
}
