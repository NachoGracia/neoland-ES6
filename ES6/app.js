//! iteracion 1

/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/

const ejemplo = (a = 10, b = 5) => {
  console.log(a + b);
};

//1.1

ejemplo();

//1.2

ejemplo(3); // toma 3 como primer valor

//1.3

ejemplo(4, 4);

//! iteracion 2

/*2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;
console.log("🚀 ~ title:", title);
console.log("🚀 ~ gender:", gender);
console.log("🚀 ~ year:", year);

/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;
console.log("🚀 ~ fruit1:", fruit1);

/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name } = animalFunction();
console.log("🚀 ~ name:", name);

const { race } = animalFunction();
console.log("🚀 ~ race:", race);

/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name e itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = { nombre: "Mazda 6", itv: [2015, 2011, 2020] };

const { nombre, itv } = car;

console.log("🚀 ~ nombre:", nombre);
console.log("🚀 ~ itv:", itv);

const [itv1, itv2, itv3] = car["itv"];
console.log("🚀 ~ itv1:", itv1);
console.log("🚀 ~ itv2:", itv2);
console.log("🚀 ~ itv3:", itv3);

//! iteracion 3

//3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];

const copyPointsLists = [...pointsList];
console.log("🚀 ~ copyPointsLists:", copyPointsLists);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copyToy = { ...toy };
console.log("🚀 ~ copyToy:", copyToy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];

const pointsList2 = [54, 87, 99, 65, 32];

const concatLists = [...pointsList1, ...pointsList2];
console.log("🚀 ~ concatLists:", concatLists);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const juguete = {
  name: "Bus laiyiar",
  date: "20-30-1995",
  color: "multicolor",
};

const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const fusion = { ...juguete, ...toyUpdate };
console.log("🚀 ~ fusion:", fusion);

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const copiaArray = [...colors];

copiaArray.splice(2, 1);
console.log("🚀 ~ copiaArray:", copiaArray);

//! Iteracion 4

//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nombres = users.map((usuarios, index) => {
  return usuarios.name;
});
let resultado = nombres;
console.log("🚀 ~ resultado:", resultado);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/

const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users1.map((gente, index) => {
  if (gente.name.startsWith("A")) {
    gente.name = "Anacleto";
  }

  return gente.name;
});

const conAnacleto = names;

console.log("🚀 ~ conAnacleto:", conAnacleto);

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitadas = cities.map((ciudades, index) => {
  if (ciudades.isVisited === true) {
    ciudades.name += " (Visitado)";
  }

  return ciudades.name;
});
console.log("🚀 ~ visitadas ~ visitadas:", visitadas);

//! iteracion 5

/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores = ages.filter((edades, index) => edades > 18);
console.log("🚀 ~ mayores:", mayores);

/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/

const anos = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = anos.filter((edades, index) => edades % 2 === 0);
console.log("🚀 ~ pares:", pares);

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const jugadores = streamers.filter((youtubers, index) =>
  youtubers.gameMorePlayed.includes("League of Legends")
);

console.log("🚀 ~ jugadores:", jugadores);

/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/

const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const jugadores1 = streamers1.filter((youtubers, index) =>
  youtubers.name.includes("u")
);
console.log("🚀 ~ jugadores1:", jugadores1);

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const jugadores2 = streamers2.filter((youtubers, index) =>
  youtubers.gameMorePlayed.includes("Legends")
);

//console.log("🚀 ~ jugadores2:", jugadores2);

//ahora recorrer con forEach

const masJugon = jugadores2.map((jugadores, index) => {
  if (jugadores.age > 35) {
    jugadores.gameMorePlayed = jugadores.gameMorePlayed.toUpperCase();
  }
  return jugadores;
});

console.log("🚀 ~ masJugon ~ masJugon:", masJugon);

//! ------------------------------------------------------5.6 y 5.7 FALTAN

/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const toFilterStreamers = streamers3.filter((jugadores, index) =>
  jugadores.name.includes()
);
console.log("🚀 ~ toFilterStreamers:", toFilterStreamers);

const imput = document.querySelector("[data-function=toFilterStreamers]");
imput.addEventListener("input", (event) => {
  console.log("🚀 ~ imput.addEventListener ~ event:", event.target.value);
});
console.log("🚀 ~ imput:", imput);*/

//! Iteracion 6

//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const encontrar = numbers.find((numero, index) => {
  return numero === 100;
});
console.log(`El nº ${encontrar} ha sido encontrado`);

//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const fecha = movies.find((peliculas, index) => {
  return peliculas.date === 2010;
});
console.log(`La película del año 2010 es ${fecha.title}`);

/*6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado.*/

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const bichos = aliens.find((alienigenas, index) => {
  return alienigenas.name === "Cucushumushu";
});

//console.log("🚀 ~ bichos ~ bichos:", bichos.name) -------------------- OK

const cualidades = mutations.find((mutaciones, index) => {
  return mutaciones.name === "Porompompero";
});
//console.log("🚀 ~ cualidades ~ cualidades:", cualidades) ---------------- OK

const monstruo = { ...bichos, mutation: cualidades };

console.log("🚀 ~ monstruo:", monstruo);

//! iteración 7

/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const notas = exams.reduce((acc, alumnos) => acc + alumnos.score, 0);

console.log(`La suma de las notas de los alumnos es ${notas}`);

/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/

const sumaAprovados = exams.reduce((acc, alumnos) => {
  if (alumnos.score >= 5) {
    acc + alumnos.score, 0;
  }
  return acc;
}, 0);

console.log("🚀 ~ sumaAprovados ~ sumaAprovados:", sumaAprovados);

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const mediaNotas = notas / 2;
console.log("🚀 ~ mediaNotas:", mediaNotas);

//! iteracion 8

/*6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .gender.*/

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const generos = videogames.filter((juegos, index) =>
  juegos.genders.includes("RPG")
);
console.log("🚀 ~ generos:", generos);

// para sacar los nombres

for (let juegos in generos) {
  console.log(`Este juego es RPG:    ${generos[juegos].name} `);
}

const scores = [];

const notasScores = generos.forEach((juegos, index) => {
  scores.push(juegos.score);
});
console.log("🚀 ~ scores:", scores); // ok, me saca la puntuacion a Scores.

const medias = scores.reduce((acc, puntuacion) => acc + puntuacion, 0) / 2;

console.log(
  `La nota media de los juegos de RPG es de : ${medias} puntos sobre 10`
);
