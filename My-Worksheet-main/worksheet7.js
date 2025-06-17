//worksheet7.js objects
let person = {
    name: "sampanna",
    cast: "Ghimire",
    age: 17,
    city: "Ilam"
};
console.log(person);

console.log(person.name);
console.log(person.cast);
console.log(person.age);

person.city = "Kathmandu";
console.log(person);

//output:
// { name: 'sampanna', cast: 'Ghimire', age: 17, city: 'Ilam' }
// Sandesh
// Ghimire
// 17
// { name: 'sampanna', cast: 'Ghimire', age: 17, city: 'Kathmandu' }