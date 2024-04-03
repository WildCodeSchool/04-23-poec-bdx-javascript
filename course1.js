
/**
 * SYNTHAXE
 */

// Arithmétique
1 + 1;
2 * 3;
7 / 5;
6 % 2;
Math.sqrt(9);
Math.floor(122.5);
Math.ceil(122.6);

// incrément / décrément
let i = 0; // 0
i += 40; // 1
i++; // Attention : n'ajoute que +1

// Opérateurs de comparaison 
"1" === 1; // false : vérifie la valeur ET le type
"1" == 1; // true : ne vérifie QUE la valeur

"1" !== 1;
"1" != 1;

!false; // true : opérateur d'inversion logique

/**
 * VARIABLES
 */

// Variable qui ne sera pas réassignée
const firstName = "Nassime";
// Variable réassignable
let age = 22;
age = 23;
// old school way
// var lastName = "téléphone"; déprécié

const videos = [];
const videoList = [];

/**
 * TYPES DE DONNÉES
 */


// Types de données : les primitives
// 👉 Elles sont stockées par valeur (by value)
// boolean
// number
// string 
// null
// undefined
// Symbol

// Types de données : les non-primitives
// 👉 Elles sont stockées par Référence (by reference)
// object
// fonction
// tableau

const person = {
    name: "toto",
    age: 42
};
const member = { ...person };
person.age = 56;
console.log(member.age); // 42
console.log(person.age); // 56


/**
 * CONDITIONS
 */

const language1 = "HTML";
const language2 = "CSS";

// if / else
if (language1 === "HTML" || language2.toLowerCase() == "css") {
    console.log("You are learning the basics");
} else {
    console.log("nthg");
}

// ternary option
// subilité : le ternaire retourne une valeur
const result = language1 === "HTML" || language2.toLowerCase() == "css" ? console.log("You are learning the basics") : console.log("nthg");
console.log(result);

// le switch/case
switch (language1) {
    case "HTML":
        console.log("cool c good");
        break;
    case "Html":
        console.log("onooon sensible à la casse");
        break;
    default:
        console.log("par défaut bb");
        break;
}

// thruthy / falsy
// Thruthy c'est tout ce qui n'est pas Falsy
// FALSY = undefined, null, 0, -0, "", false

