const totalNodos = document.getElementsByTagName("*").length;

const resultado = document.createElement("p");
resultado.textContent = `Total de nodos en el documento: ${totalNodos}`;
document.body.appendChild(resultado);