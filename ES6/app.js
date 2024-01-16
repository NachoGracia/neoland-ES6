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
console.log("🚀 ~ itv1:", itv1)
console.log("🚀 ~ itv2:", itv2)
console.log("🚀 ~ itv3:", itv3)


//! iteracion 3

//3.1 Dado el siguiente array, crea una copia usando spread operators.


const pointsList = [32, 54, 21, 64, 75, 43]

const copyPointsLists = [...pointsList];
console.log("🚀 ~ copyPointsLists:", copyPointsLists)


//3.2 Dado el siguiente objeto, crea una copia usando spread operators.


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy};
console.log("🚀 ~ copyToy:", copyToy)


//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.


const pointsList1 = [32, 54, 21, 64, 75, 43];

const pointsList2 = [54,87,99,65,32];

const concatLists =[...pointsList1, ...pointsList2];
console.log("🚀 ~ concatLists:", concatLists)

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const juguete = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const fusion = {...juguete, ...toyUpdate};
console.log("🚀 ~ fusion:", fusion)

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copiaArray = [...colors];

copiaArray.splice(2,1)
console.log("🚀 ~ copiaArray:", copiaArray)


//! Iteracion 4


//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().


const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombres = users.map((usuarios, index) =>{
   return usuarios.name;

})
let resultado = nombres;
console.log("🚀 ~ resultado:", resultado)




/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/

//! --------------------ME FUNCIONA, PERO NO ENTIENDO eL RETURN
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users1.map((gente, index)=>{

    if (gente.name.startsWith("A")){
gente.name ="Anacleto"
    
     }
    

return gente.name; 

})

const conAnacleto = names; 

console.log("🚀 ~ conAnacleto:", conAnacleto)



/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/


const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitadas = cities.map((ciudades, index)=>{

    if (ciudades.isVisited === true){
        ciudades.name += ' (Visitado)';
    }

return ciudades.name;


})
console.log("🚀 ~ visitadas ~ visitadas:", visitadas)



