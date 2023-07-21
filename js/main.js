/*
console.log("Mensaje JS");

const arreglo = [4,2,1];
arreglo.push(60);

const persona = {
    nombre: 'Omar',
    apellido: 'López'
}

persona.apellido = 'Trejo';

var kilometros = 100;
console.log(kilometros);

if (1 == 1) {
    var kilometros = "Juan";
    console.log(kilometros);
}

console.log(kilometros);
console.log(persona);
console.log(arreglo);


//Clases

class Animal {
    constructor(patas, tamanio){
        this.patas = patas;
        this.tamanio = tamanio;
    }
}

class Gato extends Animal{
    constructor(patas, tamanio, pelaje){
        super(patas, tamanio);
        this.pelaje = pelaje;
    }
}

const perro = new Animal(4, 'Mediano');
console.log(perro);

const felix = new Gato(4, 'Pequeño', 'Liso');
console.log(felix);


//Funciones
function mensaje(nombre) {
    console.log('Hola ' + nombre);
}

mensaje('Omar');


//Funciones de flecha / arrow
const mensaje = (nombre) => {    
    console.log('Hola => ' + nombre);
    saludo = 'Hola => ' + nombre;
    return saludo;
}

mensaje('Omar');
const resultado = mensaje('Ana');
console.log(resultado);

const suma = (op1, op2) => {
    return `El valor de la suma de ${op1} + ${op2} = ${op1 + op2}`;
}

const resultado = suma(10, 4);
console.log(resultado);


//Template String
const suma = (op1, op2) => {
    return `El valor de la suma de ${op1} + ${op2} = ${op1 + op2}`;
}

//Desestructuracion de objetos

const web = {
    nombre: 'Udenar',
    links:{
        sitio: 'www.udenar.edu.co'
    },
    redesSociales: {
        youtube: {   
            enlace: 'www.youtube.com/udenar',
            nombre: 'Youtube Udenar'         
        },
        facebook: {    
            enlace: 'www.facebook.com/udenar',
            nombre: 'Facebook Udenar'         
        },
        instagram: {
            enlace: 'www.instagram.com/udenar',
            nombre: 'Instagram Udenar' 
        }
    }
}

//console.log(web.redesSociales.instagram.enlace);
//console.log(web.redesSociales.instagram.nombre);

//const {enlace, nombre} = web.redesSociales.instagram;
//console.log(enlace);
//console.log(nombre);

// const {enlace: enlaceUdenar, nombre: nombreUdenar} = web.redesSociales.instagram;
// console.log(enlaceUdenar);
// console.log(nombreUdenar);

const {redesSociales} = web;
console.log(redesSociales);

//Operador de propagación ...

const frutas = ['Manzana', 'Pera', 'Mango', 'Fresa'];
const dulces = ['Mermelada', 'Manjar', 'Helado'];
const postres = [frutas, dulces];
console.log(postres);

const postres2 = [...frutas, ...dulces];
console.log(postres2);



//Promesa
// tarea: consultar implementacion async await

const miPromesa = new Promise((resolv, reject) => {
    if (Math.random()*10 < 9) resolv('Dato Correcto');
    else reject('Dato Incorrecto');
});

miPromesa.then(respuesta => {
    console.log(respuesta);
})
.catch((error) => {
    console.log(error);
});

*/

import { suma, PI } from "./modulo.js";

//Modulo
console.log(suma(5, 4));
console.log(PI);
