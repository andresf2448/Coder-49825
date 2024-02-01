// const getCharacters = async () => {
//   let response = await fetch("https://rickandmortyapi.com/api/character");
//   let data = await response.json();

//   let filtro = prompt("Ingrese el status a filtrar");

//   let filtrados = data.results.filter((item) => item.status === filtro);

//   filtrados.forEach((character) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>Name: ${character.name}</h2>
//       <p>Gender ${character.gender}</p>
//       <p>Status: ${character.status}</p>
//       <img src="${character.image}"/>
//     `;

//     document.body.append(div);
//   });
// };

// getCharacters();

const getCharacters = async () => {
  let response = await axios("https://rickandmortyapi.com/api/character");

  response.data.results.forEach((character) => {
    let div = document.createElement("div");
    div.innerHTML = `
          <h2>Name: ${character.name}</h2>
          <p>Gender ${character.gender}</p>
          <p>Status: ${character.status}</p>
          <img src="${character.image}"/>
        `;

    document.body.append(div);
  });
};

getCharacters();
