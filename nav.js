  


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector("#wrapper-nav-ul");



navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  var visibility = links.style.visibility;
 if(visibility==="visible"){
  links.style.visibility="hidden";
 }else{
  links.style.visibility="visible";
 }
  
});