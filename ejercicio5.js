const lista = document.getElementById("cursos");
const elementos1 = lista.querySelectorAll("li");

for (const li of elementos1) {
    console.log(li.textContent);
}