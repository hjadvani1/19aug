
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


async function temp()
{
    const Showdet :Promise<string>= show
    const declare = await Showdet
    console.log(declare);
    

}

show.then(temp)
// show.then((data)=>
// {
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err.message);
// })


