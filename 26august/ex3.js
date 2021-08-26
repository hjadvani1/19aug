// Promise constructor
// let promise = new Promise(function(resolve, reject) {
//     const x = "apple";
//     const y = "apple"
// if (x === y) {
//        resolve();
//     } else {
//        reject();
//     }
// });
// promise
//   .then(function () {
//      console.log('Successful');
//   })
//   .catch(function () {
//      console.log('Some error has occured');
//   });

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

let char2=
[
    {
        sname:"mikasa",
        from:"Attack On Titan"
    },
    {
        sname:"Hinata",
        from:"Naruto"
    },
    {
        sname:"Nami",
        from:"One Piece"
    },
    {
        sname:"ururaka",
        from:"My Hero Academia"
    }
]

const getcName = (name) => 
{
    return new Promise ((resolve,reject)=>
    {
    
        const user = char.find((user)=>user.name === name )
        console.log(user);
        if(user) 
        {
            console.log(user.from)
            resolve(user)
        }
        else
        {
            reject(`No Such User Exists with name : ${name}`)
        }
    })
    
}
getcName("luffy")

const getcbelongs= (place)=>
{
    return new Promise((resolve, reject)=>
    {
        const charinfo = char.find((elements)=>
        {
            elements.from= place;
        })
        console.log((charinfo));
        if(charinfo)
        {   

            resolve(charinfo)

        }
        else
        {
            reject(`${charinfo} is from diffent arc`)
        }
    })
}
getcbelongs("Naruto")
