const Pregunta = require("prompt-sync")({sigint: true});

let dinero = Pregunta("Cantidad de dinero a invertir => ");
let interes = Pregunta("Interés anual => ");
let años = Pregunta("Número de años => ");
let capitalprevisto = dinero + 30;
let aleatoriedad = 2;
let capitalfinal = capitalprevisto + capitalprevisto * aleatoriedad;

console.log("Has invertido " + dinero + " euros al " + interes + " de interés durante " + años + " años");
console.log("El capital previsto era " + capitalprevisto);
console.log("La aleatoriedad ha sido "+ aleatoriedad);
console.log("El capital final es: "+ capitalfinal);