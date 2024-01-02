console.log('Conectado ✌');
console.log(document);

//propiedades
/* console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain); */

//metodo para manipural por medio del id de la etiquete 
console.log(document.getElementById('tituloWeb'));
//seleccionar solo el contenido
console.log(document.getElementById('tituloWeb').textContent);
//no es tan recomendado 
console.log(document.getElementById('tituloWeb').innerHTML);

/* DOMContentLoaded: el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado. Para que funcione todo debe de ir dentro de la funcion pero existe otro forma defer en html*/
/* document.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("h1"));
}); */

//querySelector: Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores. metodo
// El primer elemento que encuentre
console.log(document.querySelector(".text-danger"));

// Todos
console.log(document.querySelectorAll(".text-danger"));

// Todo lo que esté en "container"
console.log(document.querySelectorAll(".container .text-danger"));

//element: eventos disponibles para los elementos HTML 
const h1 = document.querySelector("#tituloWeb");

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);
//propiedades que se le incorporan al elemento
h1.textContent = "nuevo texto JS";
h1.style.backgroundColor = "blue";
h1.style.color = "white";

//eventos
const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#parrafo");

boton.addEventListener("click", () => {
    parrafo.textContent = "Nuevo texto desde evento";
    parrafo.style.color = "blue"
});

//create element
//const lista = document.querySelector("#lista")

const li = document.createElement("li")
li.textContent = "Elemento desde JS"
console.log(li);
//lo empujamos para que se vea en el navegador 
lista.appendChild(li)

//fragment no afecata el dom hasta que se haga un openchild
const listaPais = document.querySelector("#listaPais");

const arrayElementos = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment(); // new DocumentFragment()

arrayElementos.forEach((pais) => {
    const newNode = document.createElement("li");
    newNode.textContent = pais;

    //recibe el valor del primer nodo = null, lo incerta al final pero en la segunda vuelta tiene el primer nodo que lo guerda y asi se va montando uno sobre otro
    const referenciaNode = fragment.firstChild
    
    fragment.insertBefore(newNode, referenciaNode);
    // fragment.appendChild(newNode);
});

listaPais.appendChild(fragment);

