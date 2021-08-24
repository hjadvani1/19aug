//promises
//Its use for handle asychornous operations .
let naruto = new Promise((live,dead)=>{
    if(true){
    live()
    {
        let post = 'hokage'
        let rank = 7
        console.log("I am naruto uzumaki "+rank+" "+post);
    }
    }
    else{
        dead("dead");
    }
})
console.log(naruto);





//     if (true){
//         resolve("sasuke of sharingan")
//     }else{
//         rejected("error")
//     }
// })
// // console.log(sasuke);


const itachi = true;
let countuchiha = new Promise((hero, villain)=>{
    if(itachi){
        hero("Itachi is best person in naruto ..")
    }
    else{
        villain("still itachi is best person")
    }

});

console.log(countuchiha)


const char = new Promise((resolve,reject)=>
{
    //resolve("Chandler Bing")
    reject("error")
})
console.log(char)
console.log(char.then((data)=>console.log(data)).catch((err)=>
console.log(err)))


//promise chaining


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1 * 100);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
    
}).then((result) => {
    console.log(result);
    return result * 3;
});