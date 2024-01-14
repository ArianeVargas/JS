// notación literal
// const regExpLiteral = /bluuweb/i

// notación de objeto
// const regExpObjeto = new RegExp("bluuweb", "i")
// Flags de una RegExp#
// i Ignora mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
// g Búsqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una.
// m Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.

const formulario = document.querySelector('#formulario')
const UserName = document.querySelector('#UserName')
const UserEmail = document.querySelector('#UserEmail')

/* formulario.addEventListener('submit', (e) => {
    e.preventDefault() //evita comportamietos por defecto
    console.log(UserName.value);  
    console.log(UserEmail.value);  
})
 */

/* const formulario = document.querySelector("#formulario");
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    console.log(userName.value);
    console.log(userEmail.value);
}); */


formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    // console.log(regUserName.test(UserName.value));    
    // console.log(regUserEmail.test(UserEmail.value));  
    
    //cuando sea false !
    if(!regUserName.test(UserName.value)){
        console.log('Nombre no valido');
        return //hace que se escape sin que se use el ese
    }

    if(!regUserEmail.test(UserEmail.value)){
        console.log('Email no valido');
        return //hace que se escape isn que se use el else 
    }

    console.log('Formulario enviado');
})
