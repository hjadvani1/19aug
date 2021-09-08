// var series = function (name, watch) {
//     return new Promise(function (reoslve, reject) {
//         setTimeout(function () {
//             watch ? reject(name) : reoslve(name);
//         }, 2000);
//     });
// };
// var allAnime = Promise.allSettled([
//     series("naruto", true),
//     series('one piece', false),
//     series("AOT", true)
// ]);
// console.time('settled-in')
// allAnime.then(function (value) {
//     console.log("watched it " + value);
// }).catch(function (err) {
//     console.log("naah havent watched it yet " + err + " "); })

// const { response } = require("express");


// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)))


const getPromise = (value,delay,fail)=>
{
    return new Promise ((resolve, reject)=>
    {
        setTimeout(() => {
          fail? reject(value) : resolve(value)  ,
          delay
        },);
    })
}

const allPromise = Promise.allSettled([
    getPromise(0,0,false),
    getPromise(1,2000,false),
    getPromise(2,1000,true)
])

console.time('settled-in')

allPromise.then((value)=>
        console.log("resolved",value)
).catch((error)=>
{
    console.log("rejected",error);
})
.finally(()=>
{
    console.timeEnd('settled-in')
})