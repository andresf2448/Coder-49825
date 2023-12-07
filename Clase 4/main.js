/* 
estructura de una función

function nombreFuncion(){
  código a ejecutar por la función
}

nombreFuncion();
*/

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// function saludar() {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Hola ${nombre}`);
// }

// saludar();

/* 
estructura de una función con parámetros

function nombreFuncion(parm1, parm2, ..., parmn){
  código a ejecutar por la función
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// let saludo = prompt("Ingrese el salido");
// let nombre = prompt("Ingrese el nombre");
// saludar(saludo, nombre);
// saludar("Bienvenido", "mariano");

// function sumar(numeroUno, numeroDos) {
//   return numeroUno + numeroDos;
// }

// let resultado = sumar(5, 6);
// console.log("resultado", resultado);

// function armar(partes) {
//   return `Muñeco armado con ${partes}`;
// }

// function pintar(munecoArmado) {
//   return `${munecoArmado} y pintado`;
// }

// function vestirGuardar(munecoPintado) {
//   console.log(`${munecoPintado}, vestido y guardado en bodega`);
// }

// let munecoArmado = armar("madera");
// let munecoPintado = pintar(munecoArmado);
// vestirGuardar(munecoPintado);

// let saludo = "hola";
// let nombre = "camila";

// console.log(saludo + " " + nombre);
// console.log(`${saludo} ${nombre}`);

// function saludar() {
//   console.log("Hola");
//   return
//   console.log("chao");
// }

// saludar();

// function calculadora(numeroUno, numeroDos, operacion) {
//   switch (operacion) {
//     case "+":
//       return numeroUno + numeroDos;
//       break;

//     case "-":
//       return numeroUno - numeroDos;
//       break;

//     case "*":
//       return numeroUno * numeroDos;
//       break;

//     case "/":
//       return numeroUno / numeroDos;
//       break;

//     default:
//       return "Operación no válida";
//       break;
//   }
// }

// let numeroUno = Number(prompt("Ingrese el número uno"));
// let numeroDos = Number(prompt("Ingrese el número dos"));
// let operacion = prompt("Ingrese la operación");

// let resultado = calculadora(numeroUno, numeroDos, operacion);

// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

// let resultado = 0;
// function sumar(primerNumero, segundoNumero) {
//   resultado = primerNumero + segundoNumero;
// }
// sumar(5, 6);
// console.log(resultado);

// {
//   let nombre = "andres";
// }

// console.log(nombre);

// function sumar(numeroUno, numeroDos){
//   let resultado =  numeroUno + numeroDos;
//   return resultado;
// }

// function restar(numeroUno, numeroDos){
//   let resultado =  numeroUno - numeroDos;
//   return resultado;
// }

// const sumar = function (a, b) {
//   return a + b;
// };

// console.log(sumar(5, 6));

//arrow function
// const sumar = (a, b) => {
//   return a + b;
// };

//si la funcion no tiene parametros se debe dejar los paréntesis vacíos
//si la funcion tiene un solo parámetro se puede quitar los paréntesis
//si la función no tiene llaves ni el return está hace un return implicito

// const saludar = () => {
//   return "Hola";
// };

// console.log(saludar());

// const saludar = nombre => {
//   return `Hola ${nombre}`;
// };

// console.log(saludar("Andres"));

// const sumar = (x, y) => x + y;
// console.log(sumar(5, 6));

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
let precioProducto = 1000;
let descuento = 100;

// precio + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                // = resta(suma(1000, iva(1000)), 100);
                // = resta(suma(1000, 210), 100);
                // = resta(1210, 100);
                // = 1110

console.log(nuevoPrecio);

