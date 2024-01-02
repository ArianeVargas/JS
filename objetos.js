console.log('vinculado 😉');

//objetos literales

const gato = {
    //nombre: 'Eracles',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    //metodo
    /* comer: function() {console.log('Gato comiendo');},
    comerDos (){
        console.log('Gato comiendo dos');
    }, */
    //no se puede usasr this en funciones flecha
    comer(comida) {
        // return `${gato.nombre} está comiendo ${comida}`; esta mal llamado 
        return `${this.nombre} está comiendo ${comida}`;
    },

    listarEnemigos(){
        //funcion flecha dentro de los metodos pero no como un metodo
        this.enemigos.forEach((item) => console.log(item))
    },
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}
gato.listarEnemigos()
console.log(gato.comer('atun'));
//gato.comerDos()

//el (?) se usa para validar una propiedad que no se esta seguro se nombre Encadenamienro opcional
//console.log(gato.otros.favorito?.comida.fria);

console.log(gato.otros.amigos);

//CRUD
//crea0
gato.color = 'Blanco'
//actualiza
gato.edad = 5
//elimine
delete gato.duerme
//lee
console.log(gato);
console.log(gato.hasOwnProperty('edad'));

//for in iterador de un objeto
/* for(let propiedad in gato){
    console.log(propiedad);
    //console.log(gato[propiedad]);
} */

//Object.values(): devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
console.log(Object.values(gato));
Object.values(gato).forEach((item) => console.log(item)); 

//destrucuturing objects
//si ya existen laos nombres de las bariables existen los alias : asignndo despues de los puntos el nombre. Se puede asignar un valor por defecto si la variable no existe
const { nombre : nombreGato = 'sin nombre', edad, color} = gato
console.log(nombreGato, edad, color)

//destructurar anidados
const {amigos} = gato.otros
console.log(amigos);
const {
    otros: { favoritos },
} = gato;
console.log(favoritos);

//destructuracion array
const enemigos = ["agua", "perros"]
const [uno, dos, tres = 'No existe'] = enemigos;
console.log(uno);
console.log(dos);
console.log(tres);

//destructurar metodos no funciona el destructurin con this
const { comer } = gato;
console.log(comer("pez"));

//get y set
const mascota = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    //los get no recibe parametros se captura el nombre y se transforma
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
    //para agregar nuevo valor modificando el valor recibe 1 solo parametro
    set nuevoEnemigo(nuevo) {
        this.enemigos.push(nuevo);
    },
};

// GET
console.log(mascota.nombreMayuscula);

// SET
mascota.nuevoEnemigo = "batman";
console.log(mascota.enemigos);

//por valor vs por referencia
//primitivos aca se crean dos cajas de memoria
let a = "hola";
let b = a;

a = 'chao'
console.log(b);
console.log(a);

//no primitivod aca solo se crea una caja de memoria
let c = ["hola"];
let d = c;
c.push('chao')
console.log(d);

//objetos
const e = {
    nombre: "hole",
};

const f = e;

e.nombre = "chao";

console.log(f);
