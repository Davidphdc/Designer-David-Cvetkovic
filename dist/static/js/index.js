import Home from "./views/Home.js";
import About from "./views/About.js";
import Articles from "./views/Articles.js";
import ArticleView from "./views/ArticleView.js";
import Services from "./views/Services.js";
import Portfolio from "./views/Portfolio.js";
import Contact from "./views/Contact.js";
import PrivacyPolicy from "./views/PrivacyPolicy.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    
  const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/articles", view: Articles },
    { path: "/articles/:id", view: ArticleView },
    { path: "/services", view: Services },
    { path: "/portfolio", view: Portfolio },
    { path: "/contact", view: Contact },
    { path: "/privacypolicy", view: PrivacyPolicy }
  ];


  // Test each route for Potential Match
  const potentialMatches = routes.map(route => {
    return {
        route: route,
        result: location.pathname.match(pathToRegex(route.path))
    };
});

let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

if (!match) {
    match = {
        route: routes[0],
        result: [location.pathname]
    };
}

const view = new match.route.view(getParams(match));

document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
        // e.target.classList.add('active');
                
    }
});

router();

// TECH BUTTON FOR ABOUT PAGE

  // window.addEventListener("load", () => {
   
  //     const techbtn = document.getElementById("techbtn");
  //     const techinfo = document.getElementById("techinfo");   
  //     techbtn.addEventListener("click", () => {
  //     techinfo.classList.remove("nonvisible");
  //     techinfo.classList.add("visible");  
  //     });
  
  // });

});

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


// STICK SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});




// event listener for highlighted Page name 
let els = document.querySelectorAll('a.nav_link');
// let biolink = document.querySelector(".biolink");

els.forEach(el => {
  el.addEventListener("click", e => {
    els.forEach(a => a.closest('a').classList.remove('active'));
    e.target.closest('a').classList.add('active');
  })

})



    








// Recapcha

function onSubmit(token) {
  document.getElementById("cform").submit();
}
