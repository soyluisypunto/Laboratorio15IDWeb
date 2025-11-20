const elementos = document.querySelectorAll("*");

elementos.forEach(elemento => {

    elemento.classList.add("resaltado");

    if (elemento.classList.contains("oculto")) {
        elemento.classList.remove("oculto");
    }
});