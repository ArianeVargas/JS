const container = document.querySelector('.container')
container.addEventListener('click', e => {
    // console.log(e.target.id);

    if (e.target.id === 'padre') {
        console.log('click en padre');
    }

    // El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.
    // console.log(e.target.matches(".border-danger"));
    if (e.target.matches(".border-danger")) {
        console.log("diste click en el nieto");
    }

    // data-set 
    // console.log(e.target.dataset["div"]);
    // console.log(e.target.dataset.div);
     if (e.target.dataset["div"] === "divHijo") {
        console.log("diste click en hijo");
    }
})