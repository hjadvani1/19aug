// const anime = new Promise((live, dead)=>
// {
//     console.log("ye abhi zinda hai ?")
//     //    live("Abhi ham zinda hai ")
//        dead("Game Over")
//             if(live==0)
//             {
//                 setTimeout(() => {
                    
//                     console.log("Miracle Miracle");
//                 }, 2000);
//             }
//             else
//             {
//                 setTimeout(() => {
                    
//                     console.log("Jake puch ke aa");
//                 }, 500);
//             }
//       })
// setTimeout(() => 
// {
//     anime.then((data)=>
//     {
//         console.log(data);
//     })
//     .catch((err)=>
//     {
//         console.log(err);
//     })
        
// }, 1000);
// //console.log(anime);


// const ani = false;
// const anime = new Promise((resolve, reject)=>
// {
//     if(!ani)
//     {
//         const animed = {
//             name : "naruto",
//             category :"Action",
//             episodes: 720
//         };
//         resolve(animed);
//     }
//     else
//     {   
//         resolve(new Error("Dont know what an anime"))

//     }
    
// });

// anime.then((data)=>
// {
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err.message);
// })

// const posts = [
//     {
//         title : "Post 1",
//         body : "This is the Post one"
//     },
//     {
//         title : "Post 2",
//         body : "This is the Second post"
//     },
//     {
//         title : "Post 3",
//         body : "This is the Third post"
//     },
//     {
//         title : "Post 4",
//         body : "This is the fourth post"
//     }
// ];
// let user = new Promise((resolve,reject)=>{
//     let post = '';
//    posts.forEach(element => {
//         return post +=  element.title ;
//     })
//         resolve(post)
// })
// user.then((post)=>console.log(post))
