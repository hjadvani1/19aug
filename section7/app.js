//optional chaining
//it simplifies the way to access values through connected objects.
const user =[
    {
        name : "Naruto",
        location :{
            village:"hidden leaf village",
            power:{
                skills:"jutsu"
            }
        }
    },
    {
        name:"Luffy",
        location:{
            village : "land of vano"
        }
    },
    {
        name:"Eren",
        location:{
            village:"Shiganshina",
            power:{
                skills:"Turn into titan"
            }
        },
    },
]

user.forEach((char)=>{
    console.log(char?.location?.power?.skills || "rubberbody");})

//callback function
// a function that is passed as an argument inside of another function is called a callback function.

function sasuke(name,lname)
{
    console.log('I am '+' '+name)
    lname();
    
}

function uchiha(){
    console.log("Last Member of Uchiha clan");
}
function sharingan(){
    console.log(" sasuke of the sharingan ");
}

sasuke('sasuke',uchiha);
sasuke('sasuke',sharingan);