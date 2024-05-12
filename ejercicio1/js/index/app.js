const $btnIniciar = document.getElementById("btnIniciar");
const $inputIngresar = document.getElementById("inputIngresar");
const $btnEnviar = document.getElementById("btnEnviar");
const $formulario = document.getElementById("formulario");

$btnIniciar.addEventListener("click", iniciarJuego);
$btnEnviar.addEventListener("click", adivino);
let numRandom = 0;
function iniciarJuego() {
  $formulario.classList.remove("d-none");
  numRandom = Math.floor(Math.random() * 100) + 1;
}

function adivino() {
  const numeroIngresado = parseInt($inputIngresar.value);
  if ($inputIngresar.value.trim() === "") {
    alert("Por favor ingresa un número antes de enviar.");
    return;
  }
  if (numeroIngresado === numRandom) {
    alert("Felicidades, adivinaste el número");
  } else {
    alert("No adivinaste el número, intenta nuevamente");
  }
}
