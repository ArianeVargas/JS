# Practica JS

## Repaso conceptos claves

##

```js
const pintarCarrito = () => {
  carrito.textContent = "";

  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".rounded-pill").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};
```
