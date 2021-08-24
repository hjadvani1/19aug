//console.log("hey");


//array methods 

const user=[
    {
        name:"kakashi" ,
        age:32,
        post:"hokage",
        bounty:10000
    },
    {
        name:"luffy",
        age:19,
        post:"PirateKing",
        bounty:50000
    },
    {
        name:"eren",
        age:19,
        post:"Founding Titan",
        bounty:50000
    },
    {
        name:"naruto" ,
        age:32,
        post:"hokage",
        bounty:60000
    },

]

const getdata =(user)=> console.log(user.name);
const names = user.map(getdata);
console.log(names);
 
const newdata = user.map((item)=>{
return{
    fname:item.name.toUpperCase(),
    oage:item.age+5
};
});

console.log(newdata);
 
const whois = new Set(user.map((item)=>item.post));//for get only unique values
console.log(whois);


//filter 

//returns a new array can manipulate the size of new array 

const user1 = user.filter((char)=>{
    if(char.age<30){
        return user;
    }
})
console.log(user1);


const user2 = user.filter((char)=>char.name==="eren");
console.log(user2);
//find
//- returns single instance , returns first march , if no match then its undefined 


const uchiha = ["sauke", "itachi","obito","madara"];

const user3 = uchiha.find((char)=>char==="itachi")
console.log(user3)
const user4 = user.find((char)=> char.post ==="hokage")
console.log((user4));



//reduce 
//- its reduces array in single value 

const rdemo = user.reduce((total,char)=>{
    console.log(char.age);
    total += char.bounty;
    return total
},0)

console.log(rdemo);

// sort 
//- its use for sorting an elements in orders


const numbers =[45,65,12,45,78,35,23,61];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);



//some
//- it will return true if any predicate is true
//every
//- same as some but it checks all elements if non of them arent match with condition itll pass false in return


function odd(element, index, array) {
	return (element % 2 == 1);
}
	
function check() {
	var a = [ 6, 1, 8, 32, 35 ];
	
	// check for odd number
	var value = a.some(odd);
	console.log(value);
    var value1 = a.every(odd)
    console.log(value1);
}
check();

//array.from
// returns array object from an object with a legnth property or and iterable object


let naruto = "naruto"

console.log(Array.from(naruto));
 