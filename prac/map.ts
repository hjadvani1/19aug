let map1=new Map()
map1.set(1,"Chandler")
map1.set(2,"joey")
map1.set(3,"ross")
// console.log(JSON.stringify(map1));
console.log(map1);
for(let key of map1.keys())
{
    console.log(key);
}
for(let value of map1.values())
{
    console.log(`map values :- ${value}`);
}
console.log(`the map enteries are :`);
for(let entry of map1.entries())
{
    console.log(`best charcter in FRIENDS iS ${entry[0]}`);
}

