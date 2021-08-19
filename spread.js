const even =[2,4,6];
const odd =[1,3,5,...even];
console.log(odd);


function sum(x,y,z,...args)
{
    let total = x+y+z;
    for(const a of args)
    {
        total += a;
    }
    console.log(total);
}
const numbers = [1,5,6,8,8,8,8,8,8];

sum(...numbers);



// function myFunction(v, w, x, y, z) 
// {
//  }
// let args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);



//using spread operator in array to push 

// var rivers = ['Nile', 'Ganges', 'Yangte'];
// var moreRivers = ['Danube', 'Amazon'];

// Array.prototype.push.apply(rivers, moreRivers);
// console.log(rivers);

var arr1 =[0,1,2];
var arr2 =[...arr1];
arr2.push[3];
console.log(arr1);
console.log(arr2);       