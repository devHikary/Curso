var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiroPaciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso/ (altura*altura);
tdImc.textContent = imc;



