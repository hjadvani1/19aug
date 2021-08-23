// set is nothing but a list of values but this list cant contain any duplicates

let anime = new Set();
anime.add("naruto");
anime.add("one piece");
anime.add("jjk");
anime.add("fairy tail");
anime.add("naruto");

for (let animes of anime)
{
    console.log(animes);
}
console.log(anime.size);
console.log(anime.has("naruto"));

//has is use for check the values is exist or not
//there is also delete method to delets valuse from the list

console.log(anime.delete("jjk"));
console.log(anime);
console.log(anime.size);

//weakset is simmilar to a set expect that it contains only objects
// memory is handling properly in weakset
 

//Map accepts any key type and preserves the type of key


let series = new Map()

series.set("sitcom", "friends");
series.set("drama","breking bad");
 
console.log(series.get("sitcom"));

let ob1 ={}
let ob2 ={}
 
 series.set(ob1,10);
 series.set(ob2, 20);

console.log(series.get(ob2));

console.log(series.size);
//map also have has and delete method 



//map function using array 


let deku = new Map([["izuki","midoriya"],
                        ["katsuki","bakugo"]]);

console.log(deku.get("katsuki"));


for(let key of deku.keys()){
    console.log(key);
}

for(let value of deku.values()){
    console.log(value);
}


//foreach loop

let shoto = new Map([["izuki","midoriya"],
                        ["katsuki","bakugo"]]);
shoto.forEach(allmight)
function allmight(value,key) {
    {
        console.log(key +" "+value);

    }
    
}



