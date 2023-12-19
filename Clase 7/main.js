//retornar una funcion

// function mayorQue(n) {
//   return (m) => m > n;
// }

// const mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// const mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(7));
// console.log(mayorQueDiez(11));

// function generarOperacion(operacion) {
//   if (operacion === "sumar") {
//     return (x, y) => x + y;
//   }

//   if (operacion === "restar") {
//     return (x, y) => x - y;
//   }

//   if (operacion === "multiplicar") {
//     return (x, y) => x * y;
//   }

//   if (operacion === "dividir") {
//     return (x, y) => x / y;
//   }
// }

// const suma = generarOperacion("sumar"); //(x, y) => x + y;
// console.log(suma(5, 6));
// const resta = generarOperacion("restar"); //(x, y) => x - y;
// console.log(resta(5, 6));

//recibir funcion por parametro
// function iterar(arreglo, fun) {
//   for (const numero of arreglo) {
//     fun(numero);
//   }
// }

// iterar([1, 2, 4, 56, 78, 9], console.log);

//Métodos de busqueda y transformación
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 850 },
//   { id: 4, nombre: "media", precio: 320 },
// ];

//forEach recorre los elementos del arreglo
// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encuentra el primer elemento que cumpla la condición dada
// const producto = productos.find((item) => item.nombre === "camisaasdfasdf");
// console.log(producto);

// let nombre = prompt("ingrese el nombre del producto a buscar");
// const producto = productos.find((item) => item.nombre === nombre);

// if (producto) {
//   alert(`
//     Indice: ${producto.id - 1}
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//   `);
// } else {
//   alert("Porducto no disponible");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000, categoria: "hombre" },
//   { id: 2, nombre: "zapato", precio: 700, categoria: "mujer" },
//   { id: 3, nombre: "gorra", precio: 850, categoria: "hombre" },
//   { id: 4, nombre: "media", precio: 320, categoria: "mujer" },
// ];
//filter filtra todos los productos que cumplan la condición dada
// const filtrados = productos.filter((item) => item.precio > 750);
// console.log(filtrados);

// const precio = Number(prompt("Ingrese el precio mínimo del producto"));
// const filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//   `);
// });

// const sexo = prompt(`ingrese un sexo`);
// const filtrados = productos.filter((ítem) => ítem.categoria === sexo);

// filtrados.forEach((item) => {
//   alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//   `);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000, categoria: "hombre" },
//   { id: 2, nombre: "zapato", precio: 700, categoria: "mujer" },
//   { id: 3, nombre: "gorra", precio: 850, categoria: "hombre" },
//   { id: 4, nombre: "media", precio: 320, categoria: "mujer" },
// ];
//some verifica si existe al menos un elemento que cumpla la condición dada
// console.log(productos.some(item => item.nombre === "camisa"));
// console.log(productos.some(item => item.nombre === "camisaasfdhgj"));

//map modifica o transforma cada uno de los elementos del arreglo
// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const preciosNavidad = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21, // item.precio * 0.79
//   };
// });

// console.log(preciosNavidad);

const productos = [
  { id: 1, nombre: "camisa", precio: 1000, categoria: "hombre" },
  { id: 2, nombre: "zapato", precio: 700, categoria: "mujer" },
  { id: 3, nombre: "gorra", precio: 850, categoria: "hombre" },
  { id: 4, nombre: "media", precio: 320, categoria: "mujer" },
];

//reduce reduce un arreglo a un único valor
// const numeros = [1, 3, 4, 56, 7, 8];
// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const totalCarrito = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(totalCarrito);

//sort
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
// console.log(numeros.sort((a, b) => b - a));  // [ 200, 40, 5, 1 ]

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];
// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return -1;
//     }
//     if (a.name < b.name) {
//       return 1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );
