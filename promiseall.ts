const weeb1 : Promise<string> = new Promise((resolve, reject)=>
{
   resolve("This weeb like Naruto")

})
const weeb2 : Promise<string> = new Promise((resolve, reject)=>
{
    setTimeout(() =>
     {
       resolve("This weeb like One Piece")
     }, 2000);
} )

const weeb3 : Promise<number> = new Promise((resolve, reject)=>
{
    resolve(2345)
})
Promise.all([weeb1,weeb2]).then(res=>console.log(res))
