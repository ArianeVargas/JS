const listaDinamica = document.querySelector("#listaDinamica");

const arrayElementos = ["Perú", "Bolivia", "Colombia", "Argentina"];

const fragment = new DocumentFragment();

//<li class="list">
//    <b>País: </b> 
//    <span class="text-primary">aquí va el país</span>
//</li> 

//este es el metodo mas largo 
/* arrayElementos.forEach((pais) => {
    const li = document.createElement("li");
    li.className = "list";

    const bold = document.createElement("b");
    bold.textContent = "País: ";

    const span = document.createElement("span");
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(bold);
    li.appendChild(span);
    fragment.appendChild(li);
});

listaDinamica.appendChild(fragment); */

//esto puede ser solucion para no generar el reflow
// let template = "";

//la opccion mas rapida seria el innerHTML
/* arrayElementos.forEach((pais) => {
    template += `
    <li class="list">
        <b>País: </b> <span class="text-primary">${pais}</span>
    </li>
    `
})

listaDinamica.innerHTML = template; */


//!seria la mejor opccion mas rapida con template que tiene sus limitantes como el uso de evenlisener
const liTemplate = document.querySelector("#liTemplate") 

const clickPais = (e) => console.log("Pico", e.target);//pinta el elemento al que se le esta haciendo click
 
arrayElementos.forEach((pais) => {
    //nos clona el template para poder manipularlo
    const clone = liTemplate.content.firstElementChild.cloneNode(true) //firstElementChild para soluccionar
    clone.querySelector(".text-primary").textContent = pais;

     clone.addEventListener("click", clickPais);

    fragment.appendChild(clone)

})

listaDinamica.appendChild(fragment)