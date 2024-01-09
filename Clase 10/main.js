//EVENTOS

// let boton = document.getElementById("boton");
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

// const saludar = (nombre) => {
//   console.log(`hola click ${nombre}`);
// };

// let nombre = prompt("Ingrese el nombre de la persona");
// boton.addEventListener("click", () => saludar(nombre));

//EVENTOS MAS COMUNES
let boton = document.getElementById("boton");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));
// boton.addEventListener("click", () => console.log("click"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "azul";
// });

let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "verde";
//   } else if (e.key === "d") {
//     saludo.className = "amarillo";
//   } else {
//     saludo.className = "azul";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

const arreglo = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  // console.log(inputs[0].value);
  // console.log(inputs[1].value);

  // if (!inputs[0].value.includes("@")) {
  //   inputs[0].value = "";
  //   alert("Debe contener el @");
  // }

  if (inputs[0].value != "" && inputs[1].value != "") {
    arreglo.push({ nombre: inputs[0].value, edad: inputs[1].value });
    console.log(arreglo);
  }
});
