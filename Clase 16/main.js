//Métodos
/* 
GET traer información
POST crear un nuevo recurso
PUT actualizar un recurso
DELETE eliminar un recurso
*/

//fetch(url, config);
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response[0].title);
//     console.log(response[0].body);
//   });

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((response) => {
//     response.forEach((publicacion) => {
//       let li = document.createElement("li");
//       li.innerHTML = `
//         <h4>${publicacion.title}</h4>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Mi primera publicación",
//     body: "Mi primera publicación de Coder",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// let listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((response) => {
//     response.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>Id: ${producto.id}</h2>
//         <p>Nombre: ${producto.nombre}</p>
//         <b>$${producto.precio}</b>
//       `;

//       listado.append(li);
//     });
//   });

let listado = document.getElementById("listado");

const traerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      let li = document.createElement("li");
      li.innerHTML = `
        <h4>${publicacion.title}</h4>
        <p>${publicacion.body}</p>
      `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerDatos();
