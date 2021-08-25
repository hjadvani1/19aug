 const weeb1 = new Promise((resolve, reject)=>
 {
    resolve("This weeb like Naruto")

 })
 const weeb2 = new Promise((resolve, reject)=>
 {
     setTimeout(() =>
      {
        resolve("This weeb like One Piece")
      }, 2000);
 } )
 //weeb1.then(res=>console.log(res))
 //weeb2.then(res=>console.log(res))

 // so here the second promise show after 2 seconds but what we nees both promises as same time
 // thats why promise.all  use 


 Promise.all([weeb1,weeb2]).then(res=>console.log(res))
