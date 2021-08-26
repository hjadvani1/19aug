// const pending=0;
// const fullfilled=1;
// const rejected=2;


// function check(execute){

//     let state = pending;
//     let value = null;
//     let managers =[];
//     let catchers= [];


//     function resolve(result)
//     {
//         if(state != pending)
//         {
//             return;
//         }
//          state = fullfilled;
//          value = result;
//          managers.forEach((m)=>m(value))
//     }

//     function reject(err)
//     {
//         if(state != pending)
//         {
//             return
//         }
//         state = rejected;
//         value = err;
//         catchers.forEach((c)=> c(err))
//     }
//     this.then = function(callback)
//     {
//         if(state==fullfilled)
//         {
//             callback(value)
//         }
//         else{
//             managers.push(callback)
//         }
//     }
//     execute(resolve, reject)
// }
// const doWork=(res, rej)=>
// {
//     res("Hey wattup.....")
// }
// let someText = new check(doWork);

// someText.then((val)=>
// {
//     console.log(`1st log : ${val}`);
// }
// )

// setTimeout(() => {
//     someText.then((val=>
//         {
//             console.log(`2nd log : ${val}`);
//         }))
// }, 2000);


// setTimeout(() => {
//     someText.then((val=>
//         {
//             console.log(`3rd log : ${val}`);
//         }))
// }, 3000);




//
let char = 
[
    {
    name : "eren",
    from:"Attack On Titan"
    },
    {
        name:"naruto",
        from:"Naruto"
    },
    {
        name:"luffy",
        from:"One Piece"
    },
    {
        name :"deku",
        from:"My Hero Academia"
    }
];
const getcName = (name) => 
{
    return new Promise ((resolve,reject)=>
    {
    
        const user = char.find((user)=>user.name === name )
        console.log(user);
        if(user) 
        {
            // console.lo);
            resolve(user)
        }
        else
        {
            reject(`No Such User Exists with name : ${name}`)
        }
    })
}
getcName("luffy")


// let char1 = char.find((user)=>
// {
//     if(user==char.name)
//     {
//         console.log(user.from)
//     }
// )
// let char2=
// [
//     {
//         sname:"mikasa",
//         from:"Attack On Titan"
//     },
//     {
//         sname:"Hinata",
//         from:"Naruto"
//     },
//     {
//         sname:"Nami",
//         from:"One Piece"
//     },
//     {
//         sname:"ururaka",
//         from:"My Hero Academia"
//     }
// ]
// let char3=
// [
//     {
//         sname:"Armin",
//         from:"Attck On Titan"  
//     },
//     {
//         sname:"sasuke",
//         from:"Naruto"
//     },
//     {
//         sname:"zoro",
//         from:"One Piece"
//     },
//     {
//         sname:"bakugo",
//         from:"My Hero Academia"
//     }

// ]
// function geCinfo(name)
// {
//     // get char info and return where characte belongs to
//     console.log()

// }
// function getcbelongs()
// {   
//     // check other arrays and matches the where is character belongs to 
// }
// function getmbelongs()
// {
//     // if all the charcters mathces t

// }

// const user=[
//     {
//         name:"kakashi" ,
//         age:32,
//         post:"hokage",
//         bounty:10000
//     },
//     {
//         name:"luffy",
//         age:19,
//         post:"PirateKing",
//         bounty:50000
//     },
//     {
//         name:"eren",
//         age:19,
//         post:"Founding Titan",
//         bounty:50000
//     },
//     {
//         name:"naruto" ,
//         age:32,
//         post:"hokage",
//         bounty:60000
//     },
// ]


// const getUname=(name)=>{
//     const user2 = user.find((char)=>char.name===name);
//     console.log(user2.age);
// }
// // }
// getUname("naruto")

