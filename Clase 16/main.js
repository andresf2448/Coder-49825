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

let listado = document.getElementById("listado");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((response) => {
    response.forEach((publicacion) => {
      let li = document.createElement("li");
      li.innerHTML = `
        <h4>${publicacion.title}</h4>
        <p>${publicacion.body}</p>
      `;

      listado.append(li);
    });
  });
