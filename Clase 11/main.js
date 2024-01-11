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