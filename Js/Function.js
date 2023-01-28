function myFunction() {
    document.getElementById("pasatiempo").innerHTML = "Soy muy buena resolviendo acertijos";
  }
  

 document.getElementById("cambiar_color").addEventListener("click", function () {
  document.body.style.backgroundColor = 'green';
 });

 document.getElementById("cambiar_color2").addEventListener("click", function () {
  document.body.style.backgroundColor = '#F4BFF3';
 });

 document.getElementById("cambiar_color3").addEventListener("click", function () {
  document.body.style.backgroundColor = '#FAD1C4';
 });

 document.getElementById("cambiar_color4").addEventListener("click", function () {
  document.body.style.backgroundColor = '#efef83';
 });

 document.getElementById("ocultar_pasatiempo").addEventListener("click", function() {
  document.getElementById("demo").style.display = "none";
 });

 function mostrar(){
  document.getElementById('img_salsipuedes').style.display = 'block';
  };

function ocultar(){
  document.getElementById('img_salsipuedes').style.display = 'none';
  };