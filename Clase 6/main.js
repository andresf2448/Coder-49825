/* 
estructura de un arreglo
[elem1, elem2, ..., elemn];
*/

// const vacio = [];
// const numeros = [1, 2, 3, 4, 5];
// const nombres = ["juan", "pedro", "camila"];
// const valores = [true, false, false, true];
// const varios = [1, "andres", true];

// console.log(nombres[1]);
// console.log(numeros[0] + numeros[3]);

// const productos = ["carne", "arroz", "mate"];

// for (let i = 0; i < productos.length; i++) {
//   console.log(
//     `miro el producto ${productos[i]} lo busco y lo agrego al carrito`
//   );
// }

//Propiedades
// const productos = ["carne", "arroz", "mate"];

//length me da la longitud o cantidad de elementos del arreglo
// console.log(productos.length);

//push agregar un elemento al final del arreglo
// productos.push("aceite");
// console.log(productos);

//unshift agregar un elemento al inicio del arreglo
// productos.unshift("chocolate");
// console.log(productos);

//pop quita el último elemento del arreglo
// productos.pop();
// console.log(productos);

//shift quita el primer elemento del arreglo
// productos.shift();
// console.log(productos);

// const productos = ["carne", "arroz", "mate", "chocolate", "queso"];
//splice eleminar uno o más elementos del arreglo
// productos.splice(1, 2);
// console.log(productos);

//join une todos los elementos del arreglo separados por un parámetro
// console.log(productos.join("====="));

//concat me permite combinar dos arreglos en uno solo
// const numeros = [1, 2, 4, 5, 7];
// const varios = productos.concat(numeros);
// console.log(varios);

// const productos = ["carne", "arroz", "mate", "chocolate", "queso"];

//slice crear una copia de un fragmento del arreglo
// const copia = productos.slice(1, 5);
// console.log(copia);

// productos.splice(1, 0, "mani");
// console.log(productos);

// const productos = ["carne", "arroz", "mate", "chocolate", "queso"];

//indexOf para encontrar la posicion de un elemento dado
// console.log(productos.indexOf("arroz")); //1
// console.log(productos.indexOf("arroz amarillo")); //-1

//includes verifica la existencia de un elemento en el arreglo
// console.log(productos.includes("carne"));
// console.log(productos.includes("carne amarilla"));

// let nombre = prompt("Ingrese el nombre del producto a buscar");

// if (productos.includes(nombre)) {
//   alert("Producto disponible");
// } else {
//   alert("Producto no disponible");
// }

//reverse invierte el orden del arreglo
// productos.reverse();
// console.log(productos);

// const productos = ["carne", "arroz", "mate", "chocolate", "queso"];

// const eliminarPorNombre = (nombre) => {
//   let index = productos.indexOf(nombre);

//   if (index != -1) {
//     productos.splice(index, 1);
//     console.log(productos);
//   }
// };

// eliminarPorNombre("arroz");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "media", precio: 520 },
//   { id: 4, nombre: "zapato", precio: 374 },
// ];

// let producto = {
//   id: 5,
//   nombre: "pantalon",
//   precio: 2000,
// };

// productos.push(producto);
// console.log(productos);

// const productos = [];

// class Producto {
//   constructor(nombre, precio) {
//     this.id = productos.length + 1;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// for (let i = 0; i < 3; i++) {
//   let nombre = prompt("Ingrese el nombre del producto");
//   let precio = Number(prompt("Ingrese el precio del producto"));

//   let producto = new Producto(nombre, precio);
//   productos.push(producto);
// }

// console.log(productos);
// productos.push(new Producto("camisa", 1000));
// productos.push(new Producto("gorra", 1200));
// productos.push(new Producto("media", 800));
// productos.push(new Producto("zapato", 700));

// for (const iterator of productos) {
//   console.log(iterator.nombre);
//   console.log(iterator.precio);
// }
