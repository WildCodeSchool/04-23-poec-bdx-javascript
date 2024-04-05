
/**
 * FONCTIONS
 */

// déclaration fonction : méthode 1
function sayHello(name) {
    return "salut bg " + name;
};
// déclaration fonction : méthode 2
const sayHello2 = (name) => {
    return "salut bg " + name;
};



const result = sayHello("argument omg"); // salut bg argument omg
console.log(result);



/**
 * TABLEAUX
 */

const pokemonList = [
    { name: "carapuce", type: "water" },
    { name: "salamèche", type: "fire" }
];


const pokemonListFiltered = pokemonList.filter((pokemon) => pokemon.type === "fire");
console.log(pokemonListFiltered);

/**
 * BOUCLES
 */

for(let i = 0; i < pokemonList.length; i++) {
    const current = pokemonList[i];
    console.log(current.name + " " + current.type);

}

/**
 * OBJETS
 */

const person = {
    name: "Norbert",
    age: 42,
    getAge: function() {
        return this.age;
    }
};


console.log(person.age);
console.log(person.getAge());

person.address = "adresse";
delete person.address;
person.age = 56;

// Adam style
const entries = Object.entries(person);
console.log(entries);