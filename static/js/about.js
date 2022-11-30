// BioPAGE COntent Display

const bioBTN = document.querySelector(".headbio");
const techBTN = document.querySelector(".headtech");
const bioDIS = document.getElementById("bioDIS");
const techDIS = document.getElementById("techDIS");
const start1 = document.querySelector(".about_start");
const imgDIS = document.querySelector(".images");


bioBTN.addEventListener("click", (event) => {
  bioDIS.classList.remove("nonvisible"); 
  bioDIS.classList.add("visible"); 
  start1.classList.add("nonvisible");
  techDIS.classList.add("nonvisible");

  if (event.target.matches('.headbio')) {
    event.target.focus()
  }
  
 });

techBTN.addEventListener("click", () => {
  techDIS.classList.remove("nonvisible");
  techDIS.classList.add("visible");
  bioDIS.classList.add("nonvisible"); 
  start1.classList.add("nonvisible");
 });
 
imgDIS.addEventListener('click', () => {
  start1.classList.add("visible");
  start1.classList.remove("nonvisible");
  bioDIS.classList.add("nonvisible");
  techDIS.classList.add("nonvisible");
});
