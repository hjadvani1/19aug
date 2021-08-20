//destructuring array 
let employee =["chandler","bing","male",32];

let [fname,lname,gender,age]= employee;

console.log("My name is "+fname+" "+lname);

console.log("and im "+age+" years old "+gender);


//another example
const popularity=["#1","#2","#3","#4"];


var [naruto,onepiece,AOT] = popularity;

console.log("naruto is "+naruto+" in popularity");
console.log("one piece is "+onepiece+" in popularity");
 console.log("one piece is "+AOT+" in popularity");
 
 
 
 
const popularity=["#1","#2","#3","#4"];


var [naruto,onepiece,AOT,JJK] = popularity;

// console.log("naruto is "+naruto+" in popularity");
// console.log("one piece is "+onepiece+" in popularity");
//  console.log("AOT is "+AOT+" in popularity");
//  console.log("JJK is "+AOT+" in popularity");


//swapping array values

let anime1 ="naruto";
let anime2="one piece";

[anime1,anime2]=[anime2,anime1];
console.log("now "+anime1+" is "+naruto+" in popularity");
console.log("now "+anime2+" is "+onepiece+"in popularity");

const animelist = ["onepiece","JJK","naruto"];




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

let animelist={
    first:"naruto",
    second:"one piece",
    third:"JJK"
};

let {first, second, third}=animelist;

console.log(first,second,third);


const ani1={
    first1: 'naruto',
    second1: 'uzumaki',
};
const {first1:fname,second1:lname}=ani1;

console.log(fname+" "+lname);


//let series=
// {
//   hiren : function category(){
    
//      let action =["green arrow","game of thrones","the flash"];
//      let sitcom =["friends","the bigbang theorey","brooklyn99","HIMYM"];
//      let drama=["breking bad","13reasons why","mind hunter"];
//     let adventure=["the 100","ragnarok","vampire diaries"];
//   }

// };
//  console.log(series.hiren);

//is this any possible way to call this specific array ?? maybe im wrong but i just want to try some new things 



const char = {
    id: "7th",
    displayName: 'Hokage',
    fullName: {
      firstName: 'naruto',
      lastName: 'uzumaki'
    }
  };
  
  const charid=({id})=>id;
  const whoisHokage=({displayName, fullName: {firstName: name, lastName : lname } })=> `${displayName} is ${name} ${lname}`;
  console.log(charid(char)); //7th
  console.log(whoisHokage(char));  // Hokage is naruto uzumaki
