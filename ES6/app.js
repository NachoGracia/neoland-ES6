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


//! iteracion 5


/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores = ages.filter((edades, index) => edades > 18)
console.log("🚀 ~ mayores:", mayores)

/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/

const anos = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = anos.filter((edades, index) => edades % 2 === 0);
console.log("🚀 ~ pares:", pares)

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/


const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const jugadores = streamers.filter((youtubers, index) => 

youtubers.gameMorePlayed.includes('League of Legends'));


console.log("🚀 ~ jugadores:", jugadores)


/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/


const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const jugadores1 =  streamers1.filter((youtubers, index) =>

youtubers.name.includes('u'));
console.log("🚀 ~ jugadores1:", jugadores1);

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

//! ---------------------------------------------ME FALLA 2ª PARTE
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const jugadores2 = streamers2.filter((youtubers, index) =>

youtubers.gameMorePlayed.includes('Legend')
);  

console.log("🚀 ~ jugadores2:", jugadores2)

const mayusculas = jugadores2.filter ((youtubers, index) => 

(youtubers.gameMorePlayed).toUpperCase && youtubers.age > 35

);
console.log("🚀 ~ mayusculas:", mayusculas)



/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>

