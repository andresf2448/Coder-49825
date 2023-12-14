// let nombre = "pepito";
// let edad = 56;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// const persona = { nombre: "pepito", edad: 56, direccion: "AV" };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// let clave = "nombre";
// console.log(persona[clave]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// const persona = { nombre: "pepito", edad: 56, direccion: "AV" };

// let clave = prompt("Ingrese la clave que quiere consultar");

// alert(persona[clave]);

// const persona = { nombre: "pepito", edad: 56, direccion: "AV" };

// persona["nombre"] = "juanita";
// persona["familiar"] = "pedrito";

// persona.nombre = "juanita";
// persona.familiar = "pedrito";

// console.log(persona);

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("jaun", 56, "AV");
// const persona2 = new Persona("juan", 70, "AV1");

// console.log(persona1.nombre);
// console.log(persona2.nombre);
// {
//   nombre: "juan",
//   edad: 45,
//   direccion: "AV"
// }

// let nombre = prompt("Ingrese su nombre");
// let edad = Number(prompt("Ingrese su edad"));
// let direccion = prompt("Ingrese su direccion");

// const persona1 = new Persona(nombre, edad, direccion);
// console.log(persona1);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.peso = info.peso;
// }

// const persona1 = new Persona({
//   edad: 45,
//   nombre: "juan",
//   peso: 56,
//   direccion: "AV",
// });

// const persona2 = new Persona({
//   edad: 345,
//   nombre: "pedro",
//   peso: 5,
//   direccion: "AV1",
// });

// console.log(persona1);

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("juan", 45, "AV");

// for(const clave in persona1){
//   console.log(clave, persona1[clave]);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
// }

// const persona1 = new Persona("juan", 45, "AV");
// persona1.hablar();

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("juan", 45, "AV");
// persona1.hablar();

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("juan", 45, "AV");
// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// const producto1 = new Producto(
//   "Monitor Samsung Ls22a33anhlxzl 22 PuLG",
//   375000,
//   "httpas.fdkjhasfd"
// );

// const producto2 = new Producto(
//   "RECOMENDADO Monitor Curvo 27 Fhd Diseño Sin Bordes Color",
//   739899,
//   "http//asdfjkh"
// );

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("camisa", 1000);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

// class Producto {
//   constructor(nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
//   }

//   vender() {
//     this.cantidad -= 1; // this.cantidad = this.cantidad - 1
//   }
// }

// const producto1 = new Producto("camisa", 1000, 5);
// console.log(producto1);
// producto1.vender();

// if (producto1.cantidad > 0){
//   producto1.vender();
// }
// console.log(producto1);
// producto1.vender();
// console.log(producto1);
