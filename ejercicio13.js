const primerArticle = document.querySelector("article");
const main = document.querySelector("main");

const copia = primerArticle.cloneNode(true);
main.appendChild(copia);