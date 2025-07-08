console.log('Hello,World');

const name = "Anima"
let age = 25
var isStudent = true
const address = "Rochdale Manchester"
const hobbies = ["game","riding",5, "outing" ]
const undefinedVariable = undefined
const nullVariable = null

let artributes = [name, age, isStudent,address, hobbies, undefinedVariable,nullVariable]
// console.log(`Welcome, ${name}`);
// console.log("Welcome, "+ name);
artributes.forEach(artribute => {
    console.log(`Artribute: ${artribute}  Data type: ${typeof artribute}`)
});
