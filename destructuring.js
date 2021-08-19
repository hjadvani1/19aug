//destructuring array 
let employee =["chandler","bing","male",32];

let [fname,lname,gender,age]= employee;

console.log("My name is "+fname+" "+lname);

console.log("and im "+age+" years old "+gender);


//destructuring objcts

let employe1={
    fname1:"chandler",
    lname1:"bing",
    age1 : 32,
};

let{fname1,lname1,age1}=employe1;
console.log(fname1);
console.log(lname1);
console.log(age1);




// let {fname:f, lname:l, age:a}=employe1;//using alias

// console.log(f);
// console.log(l);
// console.log(a);
