const seccion = document.querySelector("section");

const lista1 = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    lista1.appendChild(li);
}

seccion.appendChild(lista1);