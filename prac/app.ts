
let cast :string[]=[]
cast=["chandler","joey",'ross','monica','rachel','phoebe']
// console.log(cast);

function showCast(arr:string[]):void{
    cast.sort()
    console.log(cast);
    
}
// showCast(cast)

//spread operator

let c1 :string[]=["tanjiro",'nezuko','zenitsu']
let c2 : string[]=["itadori",'megumi','gojo']

let c3 :string[]=[...c1]
console.log(`copied array using spread operator... :-} ${c3}`);

let c4 :string[]=[...c1,...c2]
console.log(`array merged using spread operator.... :- ${c4}`);

enum anime
{
    naruto,
    onepiece,
    AOT,
    JJK
}

var ani: anime = anime.AOT

function getAnime()
{
    switch(ani)
    {
        case anime.naruto :console.log("You watched naruto");
        break
        case anime.onepiece: console.log("you didnt watch it ");
        break
        case anime.AOT:console.log("You wacthed it 3 times..daymm");
        break
        case anime.JJK:console.log("you watched it ");
        break
                               
    }

}
getAnime()

//fpreach
let series :string[]=[]
series=['Friends','Brooklyn99','HIMYM']
 var sitcom:string[]=[]
series.forEach(function(ser) 

{
    sitcom.push(ser)
})
console.log(sitcom);

//map
let usemap :Map<number,string> = new Map()
usemap.set(1,"Chandler")
usemap.set(2,"joey")
usemap.set(3,"ross")
// console.log(JSON.stringify(usemap));
// console.log(usemap);
for(let key of usemap.keys())
{
    console.log(key);
}
for(let value of usemap.values())
{
    console.log(`map values :- ${value}`);
}
console.log(`the map enteries are :`);
for(let entry of usemap.entries())
{
    console.log(`best charcter in FRIENDS iS ${entry[0]}`);
}

interface Person {   
    name:string  
    age:number  
 }  
 interface Employee extends Person {   
    gender:string  
    empCode:number  
 }  
 let empObject = <Employee>{};   
 empObject.name = "chandler"  
 empObject.age = 25   
 empObject.gender = "Male"  
  console.log("Name: "+empObject.name);  
 console.log("Employee Code: "+empObject.empCode);  
 






