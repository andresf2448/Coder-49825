//SPREAD OPERATOR
// const nombres = ["juan", "pedro", "carlos"];
// console.log(nombres);
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [3, 4, 56, 78, 765, 43];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const nombres = ["juan", "pedro", "carlos"];
// const numeros = [3, 4, 56, 78, 765, 43];
// const varios = [...nombres, ...numeros];
// console.log(varios);

//paso por valor
// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "carlitos";
// console.log(nombre1);

//paso por referencia
// let persona1 = { nombre: "juan", edad: 56 };
// let persona2 = {...persona1};

// persona2.nombre = "carlitos";
// console.log(persona1);

// const usuario = {
//   nombre: "juan",
//   edad: 45,
//   curso: "Javascript",
// };

// const usuario2 = {
//   ...usuario,
//   edad: 56,
//   direccion: "AV",
// };

// console.log(usuario2);
// console.log(usuario);

// const sumar = (...numeros) => {
//   console.log(numeros);
//   // console.log(numeros.reduce((acum, item) => acum + item, 0));
// };

// sumar(3, 4, 56, 7, 98, 765, 4);
// sumar(3, 2, 3, 5);

// const usuario1 = {
//   nombre: "carlitos",
//   edad: 34,
// };
// const usuario2 = {
//   nombre: "juanita",
//   edad: 34,
// };
// const usuario3 = {
//   nombre: "pedrito",
//   edad: 34,
// };
// const usuario4 = {
//   nombre: "pepito",
//   edad: 34,
// };
// let contenedor = document.getElementById("contenedor");
// const mostrarUsuarios = (...usuarios) => {
//   usuarios.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>Nombre: ${item.nombre}</h2>
//       <b>Edad: ${item.edad}</b>
//     `;
//     contenedor.append(div);
//   });
// };

// mostrarUsuarios(usuario1, usuario2, usuario3, usuario4);
/* 
class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad
  }

  hablar(){
    console.log(`soy ${this.nombre}`)
  }
}
*/

///////////////////////////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "zapato", precio: 1000 },
// ];
// const carrito = [];
// let boton = document.getElementById("boton");
// let contenedor = document.getElementById("contenedor");

// //funcion para agregar el producto al carrito
// const agregar = (id) => {
//   let productoEncontrado = productos.find((item) => item.id === id);
//   carrito.push(productoEncontrado);
//   console.log(carrito);
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//   `;
//   //boton personalizado con el id
//   contenedor.append(div);

//   let boton = document.getElementById(`boton${item.id}`); //traemos el boton personalizado por el id
//   boton.addEventListener("click", () => agregar(item.id)); //le agregamos el evento
// });

// boton.addEventListener("click", () => {
//   carrito.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `;
//     document.body.append(div);
//   });
// });

////////////////////////////////////////////////////////////////////////////////
// const productos = []; //arreglo para guardar los productos creados
// let formulario = document.getElementById("formulario");
// let contenedor = document.getElementById("contenedor"); //contenedor para los productos creados

// const renderizado = (productos) => {
//   //funcion para mostrar los productos creados
//   contenedor.innerHTML = "";

//   productos.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>ID: ${item.id}</h2>
//       <p>Nombre: ${item.nombre}</p>
//       <b>$${item.precio}</b>
//       `;
//     contenedor.append(div);
//   });
// };

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault(); //evitamos que se recargue

//   let inputs = e.target.children; //traemos los inputs
//   let nombre = inputs[0].value;
//   let precio = inputs[1].value;

//   //Math.max(...productos.map(item => item.id)) + 1
//   productos.push({ id: productos.length + 1, nombre, precio }); //agregamos el objeto con el producto creado
//   renderizado(productos); //mostramos los productos en la página
// });
