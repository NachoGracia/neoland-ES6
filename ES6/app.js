//! iteracion 1


/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/

const ejemplo = (a=10, b = 5) => {
    console.log(a + b);
}

//1.1

ejemplo()

//1.2

ejemplo(3) // toma 3 como primer valor

//1.3

ejemplo(4,4)

//! iteracion 2

/*2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;
console.log("🚀 ~ title:", title)
console.log("🚀 ~ gender:", gender)
console.log("🚀 ~ year:", year)



/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;
console.log("🚀 ~ fruit1:", fruit1)



/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};


const {name} = animalFunction() ;
console.log("🚀 ~ name:", name)

const {race} = animalFunction();
console.log("🚀 ~ race:", race)



/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name e itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = {nombre: 'Mazda 6', itv: [2015, 2011, 2020] }

const {nombre, itv} = car;

console.log("🚀 ~ nombre:", nombre)
console.log("🚀 ~ itv:", itv)

const [itv1, itv2, itv3] = car['itv']
console.log("🚀 ~ itv3:", itv3)


