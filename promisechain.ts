//promise chaining

const ani :boolean = false;
const anime = new Promise<string>((resolve:CallableFunction, reject:CallableFunction)=>
{
    if(!ani)
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

 const about = animed =>
   {
        const description :string = 
        `${animed.name} is an anime. It's an ${animed.category} type anime.${animed.name} have ${animed.episodes} episodes.`
        // console.log(description)
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
