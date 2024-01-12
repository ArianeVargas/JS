const carrito = document.querySelector('#carrito')
const template = document.querySelector('#template')
const footer = document.querySelector('#footer')
const templateFooter = document.querySelector('#templateFooter')
const fragment = new DocumentFragment()

let arrayCarrito = []

//delegacion de eventos para el evento click
document.addEventListener('click', e => {
    // console.log(e.target.matches('.card .btn-outline-primary'));
    if (e.target.matches('.card .btn-outline-primary')) {
        agregarCarrito(e);
        // console.log(e);
    }

    // console.log(e.target.matches('.list-group-item .btn-success'));
    if (e.target.matches('.list-group-item .btn-success')) {
        btnAumentar(e)
    }

    // console.log(e.target.matches('.list-group-item .btn-success'));
    if (e.target.matches('.list-group-item .btn-danger')) {
        btnDisminuir(e)
    }
})

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }

    const index = arrayCarrito.findIndex((item) => item.id === producto.id)

    if (index === -1) {
        arrayCarrito.push(producto)
    } else {
        arrayCarrito[index].cantidad++
    }

    pintarCarrito()
}

const pintarCarrito = () => {
    carrito.textContent = ''

    // recorremos el carrito y lo pintamos
    arrayCarrito.forEach((item) => {
        const clone = template.content.cloneNode(true)
        clone.querySelector('.text-white .lead').textContent = item.titulo
        clone.querySelector('.rounded-pill').textContent = item.cantidad
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad
        clone.querySelector('.btn-success').dataset.id = item.id
        clone.querySelector('.btn-danger').dataset.id = item.id

        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    footer.textContent = ''

    const total = arrayCarrito.reduce(
        (acumulador, valorActual) => acumulador + valorActual.precio * valorActual.cantidad,
        0
    )
    // console.log(total);
    const clone = templateFooter.content.cloneNode(true)
    clone.querySelector('p span').textContent = total

    footer.appendChild(clone)
}

const btnAumentar = (e) => {
    // console.log(e.target.dataset.id);
    arrayCarrito = arrayCarrito.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++
        }
        return item
    })

    pintarCarrito()
}
const btnDisminuir = (e) => {
    // console.log(e.target.dataset.id);
    arrayCarrito = arrayCarrito.filter((item) => {
        // console.log(item);
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--
                // console.log(item);
                if (item.cantidad === 0) return
                return item
            }
        }else{
            return item
        }
    })

    pintarCarrito()
}