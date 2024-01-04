// console.log(document.body);

//ACCESO AL DOM
//getElementById();
// let aplicacion = document.getElementById("aplicacion");
// console.log(aplicacion.innerHTML);
// console.log(aplicacion.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName();
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML); //HTMLCollection
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for (const perrito of perritos) {
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName();
// let divs = document.getElementsByTagName("div");
// console.log(divs);

//MODIFICACIÓN DEL DOM
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola muchachos</h1>";

let seccion = prompt("Ingrese la seccion");
let saludo = document.getElementById("saludo");

if (seccion === "carrito") {
  saludo.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
  saludo.className = "rojo";
} else if (seccion === "favoritos") {
  saludo.innerHTML = "<h1>Bienvenid@ a los favoritos</h1>";
  saludo.className = "azul";
} else {
  saludo.innerHTML = "<h1>Bienvenid@ a nuestra super página</h1>";
  saludo.className = "verde";
}
