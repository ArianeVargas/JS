const boton = document.querySelector("#boton");
const textoHexa = document.querySelector("#textoHexa");
const cardColor = document.querySelector("#cardColor");
const inputColor = document.querySelector("#inputColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
})