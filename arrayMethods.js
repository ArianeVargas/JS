// El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento. Esto lo hace sin mutar el arreglo original.
// esto sorve para cuando cambiamos alfo del arreglo original no se modifique, esto es por referencia
const frutas = ["🍌", "🍏", "🍓"];
console.log(frutas);

frutas.push("🍉")
const nuevoArray = frutas.map((item) => item);
console.log(nuevoArray);

const users = [
    { nombre: "Jhon", age: 34 },
    { nombre: "Amy", age: 20 },
    { nombre: "Lorena", age: 10 },
]

const nombres = users.map((item) => item.nombre)
console.log(nombres);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPorDos = numeros.map((item) => item * 2);
console.log(numerosPorDos);

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const user = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const mayor = user.filter((item) => item.age > 30)
console.log(mayor);

// eliminar usuario por uid
const userFiltrado = user.filter((user) => user.uid !== 2); //el que sea diferente a esta condicion no se muestra
console.log(userFiltrado);

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const buscar = user.find((item) => item.uid === 2) //si la  condicion no se encuentra nos muestra un error
console.log(buscar);
const { age } = user.find((item) => item.uid === 2) //se puede aplicar el destructurin
console.log(age);

// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
const existe = user.some((item) => item.uid === 2)
console.log(existe);

// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
const indice = user.findIndex((item) => item.uid === 1)
console.log(indice);

// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3

const newArray = arr.slice(1, 3)
console.log(newArray);

// El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.    
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
// Spread syntax: permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.
const array3 = [...array1, ...array2]

console.log(array3);

/* Reduce */
const numero = [1, 2, 3, 4, 5]
const sumar = numero.reduce((acumulador, valorActual) => acumulador + valorActual)
console.log(sumar);

const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

// const soloNumeros = arrayNumeros.reduce(
//     (acumulador, valorActual) => acumulador.concat(valorActual)
// )

// console.log(soloNumeros);

// const arrayPlano = [].concat(...arrayNumeros)
const arrayPlano = arrayNumeros.flat()
console.log(arrayPlano);

// split divide un objeto de tipo String en un array, mediante un separador.
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

//join une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

const nuevamenteString = arrayMeses.join("- ");
console.log(nuevamenteString);

