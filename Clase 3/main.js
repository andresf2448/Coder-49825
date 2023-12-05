/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  código a repetir
}
*/

// i++       i = i + 1

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// i = 0, 1, 2, 3

// for (let i = 0; i < 100; i--) { CUIDADDO BUCLE INFINITO
//   console.log(i);
// }

// let numero = Number(prompt("Ingrese un número"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;
//   // alert(numero + " X " + i + " = " + resultado);
//   alert(`${numero} X ${i} = ${resultado}`);
// }

// let saludo = "hola";
// let nombre = "andres";

// console.log(saludo + " " + nombre);
// console.log(`${saludo} ${nombre}`);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese su nombre");

//   alert(`Nombre: ${nombre} Turno #${turno}`);
// }

// alert("Turnos agotados");

//break

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

//continuo

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del while

while(condicion){
  código a repetir siempre que la condición sea verdadera
}
*/

// let repetir = true;

// while (repetir) { CUIDADO BUCLE INFINITO
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");

//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido pepito");

/* 
estructura de un do while

do{
  código a ejecutar por primera vez y luego siempre que la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("Entramos");
// }

// do {
//   console.log("Entramos");
// } while (repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor === valor1
    break;

  case valor2:
    codigo a ejecutar cuando el valor === valor2
    break;
  .
  .
  .
  default:
    codigo a ejecutar cuando el valor no es igual a ninguno de los valores anteriores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de Argentina");
//     break;

//   case "clp":
//     console.log("Moneda de Chile");
//     break;

//   case "cop":
//     console.log("Moneda de Colombia");
//     break;

//   default:
//     console.log("Moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingresar un nombre").toUpperCase();

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}
