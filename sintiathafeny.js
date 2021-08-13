var windowWidth = window.innerWidth; //calcular o tamanho da janela do navegador

var horLength = document.querySelector(".content-wrapper").scrollWidth; //calcula o quanto será necessário para rolar horizontalmente
var distFromTop = document.querySelector(".elemento-avo").offsetTop; //distancia do content-wrapper até o topo
var scrollDistance = distFromTop + horLength - windowWidth; //quanto vai ser preciso rolar horizontalmente

document.querySelector(".elemento-avo").style.height = horLength + "px"; //determina para o stikky onde ele deixa de ser stikky

window.onscroll = function(){
  var scrollTop = window.pageYOffset;
  
  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".content-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
  }
}