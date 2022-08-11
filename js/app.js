let botonComenzar = document.querySelector("#comenzar");
let formAdivinar = document.querySelector("#adivinar");
let numeroMagico = 0;

//manejador de eventos:
botonComenzar.addEventListener("click", comenzarJuego); //al boton
formAdivinar.addEventListener("submit", adivinarNumero); //al formulario! no al boton

//funciones:
function comenzarJuego() {
    numeroMagico = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(numeroMagico);
}

function adivinarNumero(e) {
    e.preventDefault(); //objeto event (e) detiene el comportamiento del submit por ende no recarga la pagina
    console.log("desde adivinar");
    let numeroSeleccionado = document.querySelector("input").value; //si usas getElementByTagName te devuelve un arreglo
    console.log(numeroSeleccionado);

    if (numeroMagico > numeroSeleccionado) {
        alert("el numero selecionado es menor al numero magico");
    } else if (numeroMagico < numeroSeleccionado) {
        alert("el numero selecionado es mayor al numero magico");
    } else {
        alert("ADIVINASTE!");
    }

    document.querySelector("#adivinar").reset(); //resetea todo el formulario.
}
