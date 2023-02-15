function resaltar(){
  
  document.getElementById("contenedor").style.boxShadow= "0 0 5px 5px rgb(255, 217, 0)";
  document.getElementById("contenedor").style.borderColor= "yellow"
  

  setTimeout(resaltado, 2000);
}
function resaltado(){
  document.getElementById("contenedor").style.boxShadow= "0 0 5px 5px rgb(0, 0, 0)";
  document.getElementById("contenedor").style.borderColor= "black"
  

}
//probando otros boxshadow
function resaltar2(){
  
  document.getElementById("educacion").style.boxShadow= "0 0 5px 5px rgb(255, 217, 0)";
  document.getElementById("educacion").style.borderColor= "yellow"
  

  setTimeout(resaltado2, 2000);
}
function resaltado2(){
  document.getElementById("educacion").style.boxShadow= "0 0 5px 5px rgb(0, 0, 0)";
  document.getElementById("educacion").style.borderColor= "black"
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

