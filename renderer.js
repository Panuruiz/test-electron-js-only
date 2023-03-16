// Este es el punto de anclaje entre el html y el js,
// donde seleccionamos el div con clase app
//y le asignamos el contenido generado dinámicamente por el js.
const homeContent = document.createElement("div");
fetch("./src/screens/home/home.html")
  .then((response) => response.text())
  .then((html) => {
    homeContent.innerHTML = html;
  })
  .catch((error) => console.error(error));

const layoutContent = document.createElement("div");
fetch("./src/layout/layout.html")
  .then((response) => response.text())
  .then((html) => {
    layoutContent.innerHTML = html;
    initApp();
  })
  .catch((error) => console.error(error));

const lugaresContent = document.createElement("div");
fetch("./src/screens/lugares/lugares.html")
  .then((response) => response.text())
  .then((html) => {
    lugaresContent.innerHTML = html;
    initApp();
  })
  .catch((error) => console.error(error));

const amigosContent = document.createElement("div");
fetch("./src/screens/amigos/amigos.html")
    .then((response) => response.text())
    .then((html) => {
      amigosContent.innerHTML = html;
      initApp();
    })
    .catch((error) => console.error(error));  
//Declaramos el contenedor de la app
const app = document.getElementById("app");

//Declaramos el layout que envolverá a la app
const layout = document.createElement("div");

//Declaramos los elementos que contendrá el layout
const home = document.createElement("div");

const lugares = document.createElement("div");

const amigos = document.createElement("div");

//Declaramos la función que se encargará de cambiar el contenido del div con clase content
const handleOnClick = (e) => {
  const content = document.querySelector(".content");
  const target = e.target;
  if (target.innerText === "Home") {
    //console.log(home);
    content.innerHTML = home.innerHTML;
  }
  if (target.innerText === "Lugares") {
    content.innerHTML = lugares.innerHTML;
  }
  if (target.innerText === "Amigos") {
    content.innerHTML = amigos.innerHTML;
  }
};

//Declaramos el contenido de los elementos
// layout.innerHTML = `
// <head>
//   <link rel="stylesheet" href="./src/layout/layout.css" />
// </head>
// <div class="layout">
//   <div class="nav">
//     <ul class="nav-list">
//       <li class="nav-item"><a href="#">Home</a></li>
//       <li class="nav-item"><a href="#">About</a></li>
//       <li class="nav-item"><a href="#">Contact</a></li>
//     </ul>
//   </div>
//   <div class="content"></div>
// </div>
// `;
layout.appendChild(layoutContent);

home.appendChild(homeContent);

lugares.appendChild(lugaresContent);

amigos.appendChild(amigosContent);

function initApp(){
  // Declaramos el contenido del div con clase app
  app.innerHTML =  `
    ${layout.innerHTML}
  `;
  // Declaramos el evento que se encargará de cambiar el contenido del div con clase content
  const nav = document.querySelector(".nav");
  nav.addEventListener("click", handleOnClick);
}