const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const carritoObjeto = {};

const agregarCarrito = (e) => {
    // console.log(e.target.dataset);
    // console.log(e.target.dataset.fruta); toma el nombre de la propiedad de data-fruta

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    //ir aumentando la cantidad en elc arrito
    if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
    }

    //se enpuja el id del objeto producto{}
    carritoObjeto[producto.id] = producto;

    pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

//lo pinta en el template
const pintarCarrito = () => {
    //para que no se repita el objeto
    carrito.textContent = "";

    //recorrido del objeto
    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};
