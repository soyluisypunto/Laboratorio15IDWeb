
const contenedor19 = document.getElementById("conte_nedor");

for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo ${i}`;
    contenedor19.appendChild(p);
}

const parrafos = contenedor19.querySelectorAll("p");

if (parrafos[1]) {
    parrafos[1].remove();
}
