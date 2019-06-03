var y = document.getElementById("results");
y.style.display = "none";

var x = document.getElementById("results2");
x.style.display = "none";

var divOne = document.getElementById('horasPorDia');
divOne.style.display = 'none';

var divOne = document.getElementById('IdDoinput');
divOne.style.display = 'none';

var divOne = document.getElementById('IdDoinput2');
divOne.style.display = 'none';

var livro = document.getElementById('livro');
livro.style.display = 'none';


var minutos;
function pegarTempo() {
  var tempo = document.getElementById('tempo').innerHTML;
  var resultado = tempo.split(":");
  var horasString = resultado[0];
  var minutosString = resultado[1];
  var segundosString = resultado[2];
  var horas = Number(horasString);
  minutos = Number(minutosString);
  var segundos = Number(segundosString);
  var horaFinal = calcular(minutos, segundos);
}


var horaFinal;
var horaSemi;
var aux;
function calcular(minutos, segundos) {
  var valorInputPgs = document.getElementById("numPaginas").value;
  minutos = minutos * 60;
  horaSemi = segundos + minutos;
  aux = horaSemi
  horaSemi = horaSemi * valorInputPgs;
  horaFinal = horaSemi / 60;
  horaFinalRedonda = parseInt(horaFinal * 100) / 100
  y.style.display = "block"
  window.location.hash = '#results';
  document.getElementById('results').innerHTML = 'Serão necessários, aproximadamente, ' + horaFinalRedonda + ' minutos para terminar seu livro!';
  document.getElementById('IdDoinput').innerHTML = horaFinal;
  document.getElementById('IdDoinput2').innerHTML = valorInputPgs;
}

function calcularHorasDias(horaFinal) {
  var dias = document.getElementById("diasDesejados").value;
  var valorInputPgs = document.getElementById('IdDoinput2').innerHTML;
  var horasDias = (valorInputPgs / dias) * (aux / 60);
  horasDias = parseInt(horasDias * 100) / 100
  x.style.display = "block"
  window.location.hash = '#results2';
  if (dias <= 1)
    document.getElementById('results2').innerHTML = 'Você lerá todo o livro em menos de um dia';
  else
    document.getElementById('results2').innerHTML = 'Será necessário ler cerca de ' + horasDias + ' minuto(s) por dia para finalizar este livro em ' + dias + ' dia(s)!';
  livro.style.display = "block"
}

var show = function (elem) {
  elem.style.display = 'block';
};

function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';

}