const lista17 = document.createElement("ul");
const cantidad4 = 5;

for (let i = 1; i <= cantidad4; i++) {
    const li17 = document.createElement("li");

    const span17 = document.createElement("span");
    span17.textContent = "Nivel interno";

    li17.appendChild(span17);

    lista17.appendChild(li17);
}
document.body.appendChild(lista17);