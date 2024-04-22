//Importando e exibindo a navbar
import navBar from "../../pages/partials/navbar.js";
// Supondo que você queira adicionar a barra de navegação a um elemento <header> na sua página
let headerElement = document.querySelector("header");
headerElement.innerHTML = navBar;

//Importando pagina languages
import languages from "../../pages/languages.js";
let h1 = document.createElement(h1);
let text = h1.innerHTML = "Titulo"
h1.appendChild = text


//Importando footer
import footerModule from "../../pages/partials/footer.js";
let footerContent = document.querySelector("footer");
footerContent.innerHTML = footerModule;

import homeBlock from "../../pages/home.js";
let homeContent = document.querySelector(".home");
if (homeContent) {
  homeContent.innerHTML = homeBlock;
}

import aboutBlock from "../../pages/about.js";
let aboutContent = document.querySelector(".about");
if (aboutContent) {
  aboutContent.innerHTML = aboutBlock;
}
