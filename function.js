function resaltar(){
  document.getElementById("contenedor").style.background= 'radial-gradient(circle, wheat 30%, yellow 100%)';
  setTimeout(resaltado, 1000);
}
function resaltado(){
  document.getElementById("contenedor").style.background= 'radial-gradient(circle, wheat 88%, lightslategray 100%)';

}

//desplazamiento suave
function smoothScroll(event) {
  event.preventDefault();
  var sectionId = event.currentTarget.getAttribute("href");
  var section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

//sticky
window.addEventListener("scroll", function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})
//oculta sticky y muestra al scrollear arriba
let ubicacionprincipal = window.pageYOffset;
window.onscroll = function(){
  let desplazamientoactual = window.pageYOffset;
  if(ubicacionprincipal >= desplazamientoactual){
    document.getElementById('myHeader').style.top=0;
  }
  else{
    document.getElementById('myHeader').style.top= '-100px';
  }
  ubicacionprincipal = desplazamientoactual;
}

