var elements = document.getElementsByClassName('single-line-name');

var alternarAbas = function(){
  var aba = this.getAttribute('aba');
  var elements = document.getElementById(aba);
  removeStyleAbas();
  document.getElementById('publicacoes').style.display = "none";
  document.getElementById('igtv').style.display = "none";
  document.getElementById('salvos').style.display = "none";
  document.getElementById('marcacoes').style.display = "none";
  elements.style.display= "block";
  this.children[0].style.display = "block";
  this.children[1].style.fontWeight = "bold";
};

for(var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', alternarAbas, false);
};

function removeStyleAbas() {
  var abasSelecionadas = document.getElementsByClassName('single-line-name');
  for(var i = 0; i < abasSelecionadas.length; i++) {
    abasSelecionadas[i].children[0].style.display = "none";
    abasSelecionadas[i].children[1].style.fontWeight = "normal";
  };
}