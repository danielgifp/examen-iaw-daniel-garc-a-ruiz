const Pregunta = require("prompt-sync")({sigint: true});

let texto1 = Pregunta("Introduce la primera cadena de texto => ");
let texto2 = Pregunta("Introduce la segunda cadena de texto => ");
let texto3 = Pregunta("Introduce la tercera cadena de texto => ");
let variablesuma = texto1 + texto2 + texto3;
let vacío = "";
var caracteres = "0123456789";
let total = 0;

for (let i = 0; i < caracteres.length; i++) {
    for (let j = 0; j < texto1.length; j++) {
        if (caracteres.charAt(i) === texto1.charAt(j)){
            total = total + 1 
        }
    }
}

for (let i = 0; i < caracteres.length; i++) {
    for (let j = 0; j < texto2.length; j++) {
        if (caracteres.charAt(i) === texto2.charAt(j)){
            total = total + 1 
        }
    }
}

for (let i = 0; i < caracteres.length; i++) {
    for (let j = 0; j < texto3.length; j++) {
        if (caracteres.charAt(i) === texto3.charAt(j)){
            total = total + 1 
        }
    }
}

console.log(variablesuma);
console.log('Números totales: ' + total);