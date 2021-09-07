//basic types
let message: string = 'Hello World';
console.log(message);
    
let num: number = 15
console.log(num)

let a:number =5;
let b: number=5;
console.log(a+b)

let greet:string="Hey GoodMorning"
console.log(greet);

//any type 
//it allows to assign any value to variable
let me:any="Any type"

//array
let arr:number[]=[1,2,3,4,5]
console.log(arr);
 
let arr1:any[]=[1,'hello',2,'hello again']
console.log(arr1);

//tuple
//it contain no of types
// but its an order form so we cant change the order
let arr2:[number,string]=[1,'hello']
console.log(arr2);

let cast:[number,string][]
cast=[
    
       [ 1,'chandler bing'],
       [2,'joey tribiani'],
]
console.log(cast);


//union
//it allows you to declare two types in one variable

let uni:number|string
uni="hello"
console.log(uni);

//Enum
//enum value start with 0 
//we can also define specific value 

enum first{
    naruto,
    luffy,
    eren
}
console.log(first);

enum second{
    naruto='Naruto Uzumaki',
    luffy='monkey d.luffy'
}
console.log(second.naruto);

//Object

const user={
    id:1,
    name:'Eren'
}
console.log(user.name);

const user1:{
    id:Number,
    name:String
}={
    id:1,
    name:'chandler'
}
console.log(user1.name);


type User2={
    id:number,
    name:string
}

const user2:User2=
{
    id:1,
    name:'joey'
}
console.log(user2.id);

//Type assertion

let cid:any=1;
let charid=<Number>cid
charid=1

let mcid:any =2;
let maincharid= mcid as Number
maincharid=2;

console.log(maincharid);


//functions

function cnames(a:String, b:string)
{
    return a+b
}
console.log(cnames('chandler ','bing'));

//Interfaces

interface cif{
    id:number,
    name:string
}
const char1:cif={
    id:1,
    name:'ross'
}

interface cif1{
    id:number,
    name:string
    age?:number
}

const char2:cif1={
    id:1,
    name:'monica'
}
//readonly

interface cif2{
    readonly id:number,
    name:string
}
const char3:cif2={
    id:1,
    name:'rachel'
}

// function interfaces
interface cfun{
    (x:string,y:string)
}

const cha:cfun=(x,y)=> x+y
console.log(cha('chandler ','bing'))


//class

class charcter{
    fname:string
    lname:string

    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }

   register(){

    return `${this.fname} is now register`
}
}

const friends= new charcter('ross','gellar')
console.log(friends.register())
console.log(friends);

//interface in class
interface userid {
    id:number
    name:string
}
class users implements userid{
    id:number
    name:string

    // constructor( )

}
 class student {
    studentname: string

    constructor(name:string){
        this.studentname = name;
    }

    greet()
    {
        console.log(`Good morning ${this.studentname}`);
    }
 }

 let stu = new student('Gon');
 console.log(stu.studentname);
 stu.greet()
 

class teacher extends student {
    constructor(teachername:string){
        super(teachername)
        //we use super keyword to call base class constructor
    }

    //call method 
    work(){
        console.log(`hello`);
        
    }
}
    
let m1 = new teacher('bruce')
m1.work()
console.log(m1.studentname);
m1.greet()




let naruto : (number|string)[]
naruto=[1,3,4,'naruto']


let opm :[String,Boolean]=['eren',true]
console.log(opm);

// opm=[['eren',true]]