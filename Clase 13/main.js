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

const usuario1 = {
  nombre: "carlitos",
  edad: 34,
};
const usuario2 = {
  nombre: "juanita",
  edad: 34,
};
const usuario3 = {
  nombre: "pedrito",
  edad: 34,
};
const usuario4 = {
  nombre: "pepito",
  edad: 34,
};

const mostrarUsuarios = (...usuarios) => {
  usuarios.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Nombre: ${item.nombre}</h2>
      <b>Edad: ${item.edad}</b>
    `
    document.body.append(div)
  });
};

mostrarUsuarios(usuario1, usuario2, usuario3, usuario4);
