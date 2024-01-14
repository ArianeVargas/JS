const formulario = document.querySelector('#formulario');
const UserName = document.querySelector('#UserName');
const UserEmail = document.querySelector('#UserEmail');

const alertName = document.querySelector('#alertName');
const alertEmail = document.querySelector('#alertEmail');
const alertSuccess = document.querySelector('#alertSuccess');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'Formulario enviado con exito'
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    alertSuccess.classList.add('d-none');
    const errores = [];

    // validar nombre
    if (!regUserName.test(UserName.value) || !UserName.value.trim()) {
        UserName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });

    } else {
        UserName.classList.remove("is-invalid");
        UserName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    if (!regUserEmail.test(UserEmail.value) || !UserEmail.value.trim()) {
        UserEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Formato no válido email",
        });
        
    } else {
        UserEmail.classList.remove("is-invalid");
        UserEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores)
        return
    }


    pintarMensajeExito();
});