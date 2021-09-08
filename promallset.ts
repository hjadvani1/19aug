// //pending


// const series = (name :string,watch :boolean):Promise<string> =>
// {
//     return new Promise<string>((reoslve, reject)=>
//     {
//         setTimeout(() => {
//            watch ? reject(name) : reoslve(name)
           
//         },2000);
//     })
// }

// const allAnime= Promise.allSettled(
//     [
//         series("naruto",true),
//         series('one piece',false),
//         series("AOT",true)

//     ]
// )

// allAnime.then(value=>
//     {
//         console.log(`watched it ${value}`);
        
//     }).catch(err=>{
//         console.log(`naah havent watched it yet ${err} `);
        
//     })
    

const getPromise = (value:number,delay:number,fail:boolean) : Promise<number> =>
{
    return new Promise<number> ((resolve, reject)=>
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