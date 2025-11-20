const parrafo = document.getElementsByTagName("p");

for (let i = 0; i < parrafo.length ; i++){
    parrafo[i].textContent = "Texto actualizado dinamicamente";
}