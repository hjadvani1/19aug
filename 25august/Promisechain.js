//promise chaining
const ani = true;

const anime = new Promise((resolve, reject)=>

{
    if(ani==true)
    {
        const animed = {
            name : "Naruto",
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

 const about = animed =>
   {
        const description = 
        `${animed.name} is an anime. It's an ${animed.category} type anime.${animed.name} have ${animed.episodes} episodes.`
        
         
    
         return Promise.resolve(description)
    }
    
anime.then(about)
.then((data)=>
{
    console.log(data)
})
.catch(err=>{
    console.log(err.message);
})
console.log(anime);
