const hijos = document.body.children;

for (let i = hijos.length - 1; i >= 0; i--) {
    if (hijos[i].tagName !== "SCRIPT") {
        hijos[i].remove();
        break;
    }
}