/* const padre = document.querySelector(".border-primary")
const hijo1 = document.querySelector(".border-secondary")
const hijo2 = document.querySelector(".border-danger")

padre.addEventListener('click', () => {
    console.log('me diste click padre');
}, true) //invierte el orden del burbujeo
hijo1.addEventListener('click', () => {
    console.log('me diste click hijo1');
}, true)
hijo2.addEventListener('click', () => {
    console.log('me diste click hijo2');
}, true) */
const cajas = document.querySelectorAll(".border")

cajas.forEach((item) => {
    item.addEventListener('click', (e) =>{
        e.stopPropagation()
        console.log('click');
    })
})

const formulario = document.querySelector("form")

formulario.addEventListener('submit', (e) => {
    e.preventDefault()//detenemos las acciones por defecto
    console.log('click');
})

const ancla = document.querySelector("a")

ancla.addEventListener('click', e => {
    e.preventDefault() 
    console.log("click ancla");
})