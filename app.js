//rest parameter
function greet(greeting:string,...names:string[])
{
    console.log(`${greeting} "${names.join(",")}!`);
}
// greet("Ohayo", "Naruto","Uzumaki")
// interface
interface charcter
{
    (name: string, char: string, ep:number): void;
};
function series1(name:string, char:string, ep :number):void { 
    console.log(`${char} is from ${name} and its have ${ep} episodes`)
}
function series2(name:string, char:string, ep :number):void { 
    console.log(`${char} is from ${name} and its have ${ep} episodes`)
}
let show: charcter = series1;
show("Naruto","Narto",720); 
show = series2;
show("Fairy Tail","Natsu",328);
//structural type system
interface category
{
    name:string,
    type : string,
    seasons : number,
}
function showDetails( sd: category)
{
    console.log(`${sd.name} is ${sd.type} type of series and its have ${sd.seasons} seasons`);
}
const category ={name:"FRIENDS",type:"Sitcom",seasons:10}
showDetails(category)
function Hello(person:string, date:Date):void {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
Hello("chandler", new Date());
//optional property 
function printName(obj: { first: string; last?: string }) {
    if (obj.last !== undefined) {
      console.log(obj.first.toUpperCase()+" " + obj.last.toUpperCase());
    //   console.log("hello");
    }
   else{
        console.log(`hey ${obj.first} please enter your last name`);
   }
  }
//   printName({first:"chandler"})
  printName({first:"chandler", last:"bing"})
//callback function
function weeb(name, favanime) {
    console.log("Hey i am " + name);
    favanime();
}
function fanime() {
    console.log("My fav anime is One Piece");
}
function fanime2() {
    console.log("My fav anime is Attck on titan");
}
weeb("hiren", fanime);
weeb("darshan", fanime2);
// callback function example
function char(name, favanime, arc) {
    console.log("Hey....! ");
    arc({
        yname: name,
        fanime: favanime
    });
}
function char1(name, animes) {
    // console.log(name);node
    console.log("I watched so many animes");
    animes(["onepiece", "demonslyer", "fairytail"]);
}
var schar = char('darshan', 'one piece', function (user) {
    setTimeout(function () {
        console.log("I am " + user.yname);
    }, 1000);
    setTimeout(function () {
        console.log("And of coure My fav anime is :- " + user.fanime);
    }, 2800);
    setTimeout(function () {
        char1(user.yname, function (animes) {
            console.log("like:-" + animes);
        });
    }, 2000);
});
