//like the let keyword , the const keyword declares block scope varibles
//but const keyword cant be reassigned

// const main = 13;
// // main = 14;
// console.log(main);


const person = {
    firstname : "Hiren",
    lastname : "Jadvani",
    age: 21,
    religion:"hindu"

};

console.log(person.firstname + person.lastname);
person.firstname = "Darshan";
person.lastname ="Patel";
console.log(person.firstname + person.lastname);


const company = Object.freeze(
    {
        name:"webelight",
        address:{
            street:"gota-road",
            city:"ahmedabad",
            state:"gujarat",

        }
    }
);
console.log("i work in "+company.name);
// company.address.country="india";
// console.log("webelight is belongs to "+company.country);
