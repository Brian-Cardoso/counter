//seleccionamos los elementos del html.
const counterInput = document.getElementById("counter-input");
const finalMessage = document.getElementById("final-message")

//le damos el valor por el que va a empezar el contador.
let counter = 10;

//funcion del contador
function countdown() {

    //le asignamos el valor del contador al input.
    counterInput.value = counter

    //hacemos una condicional para verificar si el contador no ha llegado a 0 para restar numeros.
    if (counter > 0) {
        //restamos un numero del contador.
        counter--;
        //la funcion se va a ejecutar de nuevo cada segundo.
        setTimeout(countdown, 1000);
    } else if (counter == 0) {
        //mostramos el mensaje del h1 cuando el contador llega a 0.
        finalMessage.style.display = "block";
    }
}
//llamamos a la funcion para que se ejecute.
countdown();
