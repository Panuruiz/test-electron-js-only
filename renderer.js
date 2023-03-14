// Este es el punto de anclaje entre el html y el js,
// donde seleccionamos el div con clase app
//y le asignamos el contenido generado dinámicamente por el js.

const homeContent = new XMLHttpRequest();
homeContent.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    return (document.getElementsByClassName("home").innerHTML =
      this.responseText);
  }

  return "<p>No funciona</p>";
};
homeContent.open("GET", "./src/screens/home/home.html", true);
homeContent.send();

//Declaramos el contenedor de la app
const app = document.getElementById("app");

//Declaramos el layout que envolverá a la app
const layout = document.createElement("div");

//Declaramos los elementos que contendrá el layout
const home = document.createElement("div");

const about = document.createElement("div");

const contact = document.createElement("div");

//Declaramos la función que se encargará de cambiar el contenido del div con clase content
const handleOnClick = (e) => {
  const content = document.querySelector(".content");
  const target = e.target;
  if (target.innerText === "Home") {
    console.log(home);
    content.innerHTML = home.innerHTML;
  }
  if (target.innerText === "About") {
    content.innerHTML = about.innerHTML;
  }
  if (target.innerText === "Contact") {
    content.innerHTML = contact.innerHTML;
  }
};

//Declaramos el contenido de los elementos
layout.innerHTML = `
  <div class="layout">
    <div class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="content"></div>
  </div>
`;

home.innerHTML = `
${homeContent}
`;

about.innerHTML = `
  <div class="about">
    <h1>About</h1>
    <p>About page content</p>
  </div>
`;

contact.innerHTML = `
  <div class="contact">
    <h1>Contact</h1>
    <p>Contact page content</p>
  </div>
`;

// Declaramos el contenido del div con clase app
app.innerHTML = `
  ${layout.innerHTML}
`;

// Declaramos el evento que se encargará de cambiar el contenido del div con clase content
document.addEventListener("DOMContentLoaded", () => {
  app.innerHTML = layout.innerHTML;
  const nav = document.querySelector(".nav");
  nav.addEventListener("click", handleOnClick);
});
