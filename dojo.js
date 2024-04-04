// Voici un objet
const cat1 = {
    name: "Java",
    ageInMonths: 7,
    imgUrl: "assets/images/cat-java.jpg"
};


/**
 * 1 - Créer une nouvelle variable "cat2" dont la valeur est "cat1"
 */

const cat2 = cat1;

/**
 * 2 - Modifier la valeur de la clé "name" de cat2.
 */

cat2.name = "JS";
console.log(cat1.name, cat2.name);

/**
 * 3 - Créer une nouvelle variable "cat3" dont la valeur est "cat1".
 */

const cat3 = { ...cat1 };

/**
 * 5 - Modifier la valeur de la clé "name" de "cat3" SANS que ça ne modifie la valeur de la clé "name" de "cat1" et "cat2"
 */

cat3.name = "PHP";
console.log(cat1.name, cat2.name, cat3.name);

/**
 * 6 - Même question, en utilisant une autre façon de faire ! 😈
 */

// const cat4 = JSON.parse(JSON.stringify(cat1));
// const cat4 = structuredClone(cat1);
// const cat4 = Object.assign({}, cat1);
// const cat4 = { ...cat1, name: "PHP" };
function deepCopyWithSpreadOperator(obj) {
    const newObj = { ...obj };
    for (let key in newObj) {
        if (typeof newObj[key] === 'object') {
            newObj[key] = deepCopyWithSpreadOperator(newObj[key]);
        }
    }
    return newObj;
}
const cat4 = deepCopyWithSpreadOperator(cat1);
/**
 * 7 - Afficher les 3 objets dans le DOM. Évite un maximum de dupliquer ton code 🫣
 */

const catList = [cat1, cat2, cat3];
const catContainerEl = document.querySelector("#cats-container");
for (const cat of catList) {
    catContainerEl.innerHTML += `
    <div class="card">
        <img src="${cat.imgUrl}" alt="${cat.name}" width="200">
        <h3>${cat.name}</h3>
        <p>${cat.ageInMonths}</p>
    </div>
    `;
}
