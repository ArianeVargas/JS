const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const input = new FormData(formulario);

    for (let item of input) {
        console.log(item); //detecta todos los inpusts y los coloca a través del name
    }

    console.log(input.get('userName'));
    console.log(input.get('userEmail'));

    console.log('Procesando el formulario');
});