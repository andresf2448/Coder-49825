//Propiedades del objeto Math
//Constantes
// console.log(Math.E);
// console.log(Math.PI);

//Mínimo y máximo
// console.log(Math.max(2, 23, 4, 5, 67, 78976, 54, 3));
// console.log(Math.min(2, 23, 4, 5, 67, 78976, 54, 3));

// console.log(Math.max(2, 3, 5, 46789, 2, 45, Infinity));
// console.log(Math.min(2, 3, 5, 46789, 2, 45, -Infinity));

//redondear
// console.log(Math.ceil(2.3)); //redondear al entero más cercano hacia arriba
// console.log(Math.ceil(2.7));

// console.log(Math.floor(3.7)); //redondear al entero más cercano hacia abajo
// console.log(Math.floor(3.2));

// console.log(Math.round(3.4)); //redondear al entero más cercano
// console.log(Math.round(3.7));
// console.log(Math.round(3.5));

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

//Números aleatorios//0 - 1
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

//0 - 10
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

// Math.round(Math.random() * amplitud + desplazamiento);
//3 - 20
// console.log(Math.round(Math.random() * 17 + 3));
// console.log(Math.round(Math.random() * 17 + 3));
// console.log(Math.round(Math.random() * 17 + 3));
// console.log(Math.round(Math.random() * 17 + 3));

// 17 - 73
// console.log(Math.round(Math.random() * 56 + 17));
// console.log(Math.round(Math.random() * 56 + 17));
// console.log(Math.round(Math.random() * 56 + 17));
// console.log(Math.round(Math.random() * 56 + 17));

//23 - 101
// console.log(Math.round(Math.random() * 78 + 23));
// console.log(Math.round(Math.random() * 78 + 23));
// console.log(Math.round(Math.random() * 78 + 23));
// console.log(Math.round(Math.random() * 78 + 23));

// const generarAleatorio = (amplitud, desplazamiento) => {
//   return Math.round(Math.random() * amplitud + desplazamiento);
// };

// console.log(generarAleatorio(13, 7));
// console.log(generarAleatorio(13, 7));
// console.log(generarAleatorio(13, 7));
// console.log(generarAleatorio(13, 7));

//Dado un arreglo de nombres, crear una función que retorne un nombre aleatorio
//Dado un arreglo de premios, crear una función que retorne un premio
//el programa debe decir aleatoriamente que persona ha ganado y que premio

// const nombres = ["pablo", "pepito", "juan", "camila", "andres", "pedrito", "carlitos"];
// const premios = ["computador", "monitor", "celular", "gorra", "pantalon"];

// const generarNombreAleatorio = () => {
//   let indice = Math.floor(Math.random() * nombres.length);

//   return nombres[indice];
// };

// const generarPremioAleatorio = () => {
//   let indice = Math.floor(Math.random() * premios.length);

//   return premios[indice];
// };

// console.log(
//   `Nombre del ganador ${generarNombreAleatorio()} Premio ${generarPremioAleatorio()}`
// );
// console.log(
//   `Nombre del ganador ${generarNombreAleatorio()} Premio ${generarPremioAleatorio()}`
// );
// console.log(
//   `Nombre del ganador ${generarNombreAleatorio()} Premio ${generarPremioAleatorio()}`
// );
// console.log(
//   `Nombre del ganador ${generarNombreAleatorio()} Premio ${generarPremioAleatorio()}`
// );
// console.log(
//   `Nombre del ganador ${generarNombreAleatorio()} Premio ${generarPremioAleatorio()}`
// );
// console.log(
//   `Nombre del ganador ${generarNombreAleatorio()} Premio ${generarPremioAleatorio()}`
// );

//DATE
// console.log(Date());
// let navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

// let navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

let navidad = new Date("December 24, 2023 23:59:59");
let hoy = new Date("December 20, 2023");

console.log(navidad - hoy);

const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);
