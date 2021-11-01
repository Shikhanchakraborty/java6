const person = {name:"shikhan",phone:"01871054196", brother:"kakan"};
const {phone} = person;
const {brother} = person;
console.log(phone,brother);

const cars = ["Tesla", "BMW", "Audi", "Ferrari", "Ford"];

const {Tesla,BMW} = cars;
// const BMW = cars;
//const Tesla_BMW = cars[0] + " " + cars[1];

console.log(Tesla,BMW)


const chotoBai = ["niloy","kakan","shorouv"];
const [niloy,shorouv,kakan] = chotoBai;
console.log(niloy,shorouv,kakan)


const person = ["shikhan","01871054196", "kakan"]
const [name,...last] = person
console.log(last)
