
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

const check :boolean = false;
const show : Promise<string> = new Promise ((resolve:CallableFunction, reject:CallableFunction)=>
{
    if(!check)
    {
        interface tsanime{
            name:string;
            category:string;
            episodes:number;
        }
        const animed : tsanime = {
            name : "naruto",
            category :"Action",
             episodes: 720
        };
        resolve(animed);
    }
    else
    {   
        resolve(new Error("Dont know what an anime"))

    }
    
});

show.then((data)=>
{
    console.log(data)
})
.catch(err=>{
    console.log(err.message);
})

