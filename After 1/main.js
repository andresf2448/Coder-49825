/* 
estructura del while

while(condicion){
  código a repetir cuando la condición es verdadera
}
*/

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "maria"){
//   alert("Usuario incorrecto");
// }

// let entrada = prompt(
//   "Ingrese seccion de hombre o mujer para ver productos, en caso de querer salir ingrese salir"
// );

// while (entrada != "salir") {
//   switch (entrada) {
//     case "hombre":
//       alert(`
//         Camisas Hombre
//         Pantalones Hombre
//       `);
//       break;

//     case "mujer":
//       alert(`
//         Camisas Mujer
//         Pantalones Mujer
//       `);
//       break;
//     default:
//       alert("Opción no válida");
//       break;
//   }

//   entrada = prompt(
//     "Ingrese seccion de hombre o mujer para ver productos, en caso de querer salir ingrese salir"
//   );
// }

let rol = prompt("ingrese el rol");
let nombre = prompt("Ingrese su nombre");

while (rol != "usuario") {
  if (rol === "admin" && nombre === "carlitos") {
    alert("tienes acceso a todo el sistema");
  } else if (rol === "admin" && nombre === "andres") {
    alert("tienes acceso a todo el sistema menos a los favoritos");
  } else if (rol === "operador" || rol === "soporte") {
    alert("Tienes acceso a lo necesario");
  } else {
    alert("rol no reconcido");
  }

  rol = prompt("ingrese el rol");
  nombre = prompt("Ingrese su nombre");
}

alert("Como usuario no tienes acceso");