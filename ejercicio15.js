const contenedor = document.getElementById("contenedor-parrafos");
const parrafos = contenedor.querySelectorAll("p");
const arrayParrafos = Array.from(parrafos);

arrayParrafos.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent);
});

arrayParrafos.forEach(p => contenedor.appendChild(p));