//EVENTOS

let boton = document.getElementById("boton");
// const saludar = () => {
//   console.log("hola click");
// };

//primera forma para agregar eventos
//se debe pasar la declaracion de la funcion no su ejecucion
// boton.addEventListener("click", saludar);

//segunda forma para agregar eventos
// boton.onclick = saludar;

// let evento = prompt("Ingrese el evento deseado");
// boton.addEventListener(evento, saludar);

const saludar = (nombre) => {
  console.log(`hola click ${nombre}`);
};

let nombre = prompt("Ingrese el nombre de la persona");
boton.addEventListener("click", () => saludar(nombre));
