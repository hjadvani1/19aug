console.log("Hey Ohayo ");
// setTimeout(() => {
//     console.log("Hey Eren Ohayo.....");
// }, 4000);

// setTimeout(() => {
//     console.log("Ohayo Gosaimuch");
// }, 6000);

// let say = name => console.log(`Hey.... ${name}`);
// const character= (fname, lname , calllback)=>
// {
//     const fullName = `${fname} ${lname}`
//     calllback(fullName)
// }
// character('Naruto','Uzumaki',say)

// setTimeout(() => {
//     console.log("Hey jut chekin is it workin or not");
//     setTimeout(() => {
        
//         console.log("lets see what is gonna happen");
//     }, 2000);
// }, 1500);

// let Anime = prompt("Do you watch anime")

// console.log(Anime);
// let No = "no"
// if(Anime.localeCompare(No)==0){
//     alert("What ? what are you doin watch it now ")
// }
// else{
//     alert("Noice weeb")
// }

// function weeb(name , favanime)
// {
//     console.log("Hey i am "+name);
//     favanime()
// }
// function fanime()
// {
//     console.log("My fav anime is One Piece");
// }
// function fanime2()
// {
//     console.log("My fav anime is Attck on titan");
// }


// weeb('darshan', fanime)
// weeb('Hiren', fanime2)
// function weeb(name, favanime,show)
// {
//     setTimeout(() => {
//         console.log("You are weeb..");
//     }, 2000);
//  show({fname:name,
//         fanime :favanime})
// }

// const char = weeb('Darshan','onepiece',user=()=>{console.log()
// })

// const char = weeb('luffy','one piece',char=>
// {
//     setTimeout(() => {
//         console.log( "Your stole  "+50000+" from land of vano");     
//     }, 1000);
   
// });

//callback function
function char(name,favanime,arc)
{
    setTimeout(() => {
        console.log("Hey....! ");
        arc({yname : name,
            fanime:favanime
        })    
    }, 300);
}
function char1(name,animes){
    setTimeout(() => {
        console.log("I watched so many animes")
        animes(["onepiece","demonslyer","fairytail"])
    }, 3000);
}


const schar = char('darshan','one piece' ,user=>
    setTimeout(() => 
    {
        console.log("I am "+user.yname)
        setTimeout(() =>
         {
            console.log("And of coure My fav anime is :- "+user.fanime);
        }, 3000);
        }, 2000),
    char1(char.yname,animes=>
    {
        setTimeout(() => {
            console.log("like:-"+animes);
        }, 1000);
    })
)



//console.log(schar);
