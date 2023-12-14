// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "zapato", precio: 1000 },
// ];

//pop, push, indexOf, includes
// let nombre = "pantalon";
// let precio = 1000;
// let producto = {
//   id: productos.length + 1,
//   nombre,
//   precio
// };

// productos.push(producto);
// console.log(productos);

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "media", precio: 700 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 100 },
];

// let nombre = prompt("Ingrese el producto a buscar");
// let producto;

// for (const item of productos) {
//   if (item.nombre === nombre) {
//     producto = item;
//   }
// }

// alert(`Producto: ${producto.nombre} Precio: ${producto.precio}`);

let precio = Number(prompt("INgrese el precio minimo del producto"));
const productosFiltrados = [];

for (const iterator of productos) {
  if (iterator.precio > precio) {
    productosFiltrados.push(iterator);
  }
}

for (const iterator of productosFiltrados) {
  alert(`
    Id: ${iterator.id}
    Nombre: ${iterator.nombre}
    Precio: ${iterator.precio}
  `);
}
