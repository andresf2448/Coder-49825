//STORAGE

//localStorage nos permite persistir información cuando
//recargamos la página
//cerramos la página
//reiniciamos o apagamos le computador

//setItem(clave, valor); guardar un elemento identificado por clave valor

// localStorage.setItem("nombre", "andres");
// localStorage.setItem("valor", "true");
// localStorage.setItem("numero", 5);

//getItem(clave); recupera un valor por su clave
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let objeto = { nombre: "andres", edad: 56 };
// let arreglo = [4, 5, 67, 8, 9];

// localStorage.setItem("arreglo", arreglo);
// localStorage.setItem("objeto", objeto);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log("valor asociado", localStorage.getItem(clave));
// }

//ELIMINAR EL STORAGE
// localStorage.removeItem("nombre"); //elimina la clave con su respectivo valor
// localStorage.clear(); //elimina todo el localStorage

//sessionStorage persiste la información cuando recargamos la página
// sessionStorage.setItem("nombre", "andres");
// sessionStorage.setItem("valor", "true");
// sessionStorage.setItem("numero", "4");

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);
//   console.log(clave);
//   console.log("valor asociado", sessionStorage.getItem(clave));
// }

// sessionStorage.removeItem("nombre"); //elimina la clave con su respectivo valor
// sessionStorage.clear(); //elimina todo el localStorage

//JSON
//JSON.stringify(elemento); da formato json al elemento
// const producto = { id: 1, nombre: "camisa", precio: 1000 };
// const json = JSON.stringify(producto);

// console.log(json);
// console.log(typeof json);

// const producto = { id: 1, nombre: "camisa", precio: 1000 };
// localStorage.setItem("producto", JSON.stringify(producto));

//JSON.parse(elemento); quitar el formato json al elemento
// const producto = localStorage.getItem("producto");
// console.log(JSON.parse(producto));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 980 },
//   { id: 4, nombre: "gorra", precio: 320 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardarStorage(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

//////////////////////////////////////////////////////////////////
// let usuario;
//traemos el usuario del storage
// let usuarioStorage = sessionStorage.getItem("usuario");

//si hay usuario es porque es viejo
// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   //cuando no hay usuario pedimos el usuario y guardamos en storage
//   usuario = prompt("Ingrese el usuario");
//   alert(`Bienvenid@ por primera vez ${usuario}`);
//   sessionStorage.setItem("usuario", usuario);
// }

///////////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 980 },
//   { id: 4, nombre: "gorra", precio: 320 },
// ];
// localStorage.setItem("carrito", JSON.stringify(productos));

let carrito;
//traemos el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//traemos el boton para eliminar el carrito
let boton = document.getElementById("boton");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  carrito = [];
  let div = document.createElement("div");
  div.innerHTML = "Carrito vacío";

  document.body.append(div);
}

//recorremos le carrito
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//agreagamos el escuchador de evento para el boton
boton.addEventListener("click", () => {
  localStorage.clear(); //borramos el storage
  alert("Carrito eliminado");
  location.reload(); //recargamos la pagina
});
