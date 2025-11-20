const divs = document.querySelectorAll("div");
let i = 0;
const colores = ["red", "blue", "green", "orange", "purple", "yellow"];

for (const div of divs) {
    div.style.backgroundColor = colores[i % colores.length];
    i++;
}