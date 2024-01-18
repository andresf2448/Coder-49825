//OPERADORES AVANZADOS
//operador ++
// let numero = 1;
// numero = numero + 1;
// numero += 1;
// numero++;

//Operador ternario
/* 
estructura del operador ternario

condicion ? codigo cuando la condicion es verdadera : codigo cuando la condicion es falsa;
*/

// let edad = 20;

// if (edad >= 18) {
//   console.log("eres mayor de edad");
// } else {
//   console.log("eres menor de edad");
// }

// edad >= 18 ? console.log("eres mayor de edad") : console.log("eres menor de edad");

// let temperatura = 40;

// if (temperatura >= 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }

// temperatura >= 30 ? console.log("Día Caluroso") : console.log("Día agradable");

// let permiso;
// const usuario = {
//   nombre: "juanito",
//   edad: 56,
// };

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "juanito",
//   edad: 10,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar");

/* 
operador1 && operador2 retorna operador2 si operador1 es verdadero, en caso contrario retorna operador1
si operador1 entonces operador2


operador1 || operador2 retorna operador1 si este es verdadero, en caso contrario retorna operador2
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("Carrito vacio");
// }

// carrito.length === 0 && console.log("carrito vacio");

// const usuario = {
//   nombre: "juan",
//   edad: 10,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); // hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario = {
//   nombre: "pedrito",
//   edad: 14,
// };
// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//ACCESO CONDICIONAL A UN OBJETO
// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "juan",
//   edad: 45,
//   cursos: null
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");

//DESESTRUCTURACION
// const usuario = {
//   nombre: "Juan",
//   edad: 34,
//   direccion: "AV",
// };

// const nombre = usuario.nombre;
// const edad = usuario.edad;
// const direccion = usuario.direccion;

// const { nombre, edad, direccion } = usuario;

// console.log(nombre, edad, direccion);

// const usuario = {
//   nombre: "Juan",
//   edad: 34,
//   direccion: "AV",
//   telefono: {
//     casa: 1234,
//     trabajo: 456,
//   },
// };

// const {
//   nombre,
//   telefono: { trabajo },
// } = usuario;

// console.log(trabajo);

// const usuario1 = {
//   nombre: "Juan",
//   edad: 34,
//   direccion: "AV",
//   telefono: {
//     casa: {
//       numero1: 1234535,
//       numero2: 3546,
//     },
//     trabajo: {
//       numero1: 12535,
//       numero2: 356,
//     },
//   },
// };

// const usuario2 = {
//   nombre: "Juan",
//   edad: 34,
//   direccion: "AV",
//   telefono: {
//     casa: {
//       numero1: 34535,
//       numero2: 46,
//     },
//     trabajo: {
//       numero1: 12535,
//       numero2: 354,
//     },
//   },
// };

// const {
//   nombre: nombre1,
//   telefono: {
//     casa: { numero1: numeroCasa1 },
//   },
// } = usuario1;

// const {
//   nombre: nombre2,
//   telefono: {
//     casa: { numero1: numeroCasa2 },
//   },
// } = usuario2;

// console.log(nombre1, numeroCasa1);
// console.log(nombre2, numeroCasa2);

// const mostrarDatos = ({ nombre, edad }) => {
//   // const { nombre, edad } = usuario;
//   console.log(nombre, edad);
// };

// const usuario = {
//   nombre: "Juan",
//   edad: 34,
//   direccion: "AV",
//   telefono: {
//     casa: 1234,
//     trabajo: 456,
//   },
// };

// mostrarDatos(usuario);

// const productos = [
//   {
//     id: 1,
//     nombre: "computador",
//     precio: 1000,
//     categoria: { categoria1: "teconologia", categoria2: "computadoras" },
//   },
//   {
//     id: 2,
//     nombre: "camisa",
//     precio: 500,
//     categoria: { categoria1: "ropa", categoria2: "hombre" },
//   },
//   {
//     id: 3,
//     nombre: "monitor",
//     precio: 700,
//     categoria: { categoria1: "teconologia", categoria2: "pantallas" },
//   },
//   {
//     id: 4,
//     nombre: "pantalon",
//     precio: 1350,
//     categoria: { categoria1: "ropa", categoria2: "mujer" },
//   },
// ];

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <p>Categoria1: ${item.categoria.categoria1}</p>
//     <p>Categoria2: ${item.categoria.categoria2}</p>
//   `;

//   document.body.append(div);
// });

// productos.forEach(({ id, nombre, precio, categoria }) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${id}</h2>
//     <p>Nombre: ${nombre}</p>
//     <b>$${precio}</b>
//     <p>Categoria1: ${categoria.categoria1}</p>
//     <p>Categoria2: ${categoria.categoria2}</p>
//   `;

//   document.body.append(div);
// });

// const nombres = ["andres", "juanita", "pedrito", "carlitos"];
// const [a, , b] = nombres;
// console.log(a, b);

const persona = {
  nombre: "pepito",
  usuario: null,
};

const pedirDatos = () => {
  let usuario = promp("Ingrese el nombre");
  let edad = promp("Ingrese la edad");

  let objeto = {
    nombre: usuario,
    edad,
  };

  return objeto;
};

const nuevoUsuario = persona.usuario || pedirDatos();
