// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 580 },
//   { id: 3, nombre: "zapato", precio: 340 },
//   { id: 4, nombre: "gorra", precio: 1569 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// const actualizarPrecio = (nombre, nuevoPrecio) => {
//   //traer del storage
//   let carritoStorage = localStorage.getItem("carrito");
//   let data = JSON.parse(carritoStorage);

//   //buscar el producto requerido
//   const producto = data.find((item) => item.nombre === nombre);

//   //actualizamos el precio
//   producto.precio = nuevoPrecio;

//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del producto a actulizar");
// let precio = Number(prompt("Ingrese el nuevo precio del producto"));

// actualizarPrecio(nombre, precio);

// const agregarProducto = (nombre, precio) => {
//   //traemos el storage
//   let carritoStorage = localStorage.getItem("carrito");
//   let data = JSON.parse(carritoStorage);

//   //actualizacion
//   let producto = {
//     id: data.length + 1,
//     nombre,
//     precio,
//   };
//   data.push(producto);

//   //subir al localStorage
//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del producto a actulizar");
// let precio = Number(prompt("Ingrese el nuevo precio del producto"));

// agregarProducto(nombre, precio);

//crear una funcion que pasado un id elimine el producto del localStorage(filter)

const eliminarProducto = (id) => {
  let carritoStorage = localStorage.getItem("carrito");
  let data = JSON.parse(carritoStorage);

  let filtrados = data.filter((item) => item.id !== id);

  localStorage.setItem("carrito", JSON.stringify(filtrados));
};

let id = Number(prompt("ingrese el id para eliminar"));
eliminarProducto(id);
