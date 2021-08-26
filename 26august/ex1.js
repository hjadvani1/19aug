const student=[
    {id: 1, name:'darshan'},
    {id: 2,name:'hitesh'},
    {id: 3,name:'hiren'},
    {id: 4,name:'sahil'},
    {id: 5,name:'jay'},
]
const number=[
    {userId: 1,Enrollno: '6009'},
    {userId: 2,Enrollno: '6010'},
    {userId: 3,Enrollno: '6011'},
    {userId: 4,Enrollno: '6012'},
    {userId: 5,Enrollno: '6013'},
]
const getdata = async() =>{
    try
    {
            const user = await getuser('hiren')(1);
            // debugger
            if(user)
            {
                // const roll = await getnum(user.id)
                console.log(user)
                // console.log(roll);
            }
    }
    catch(error)
    {
            console.log(error);
    }
}
getdata()
    function getuser(name)
    {
        function getnum(userId)
        {
            return new Promise((resolve,reject)=>
            {
                const user = student.find((ninja) => ninja.name === name)
                const roll = number.find((num) => num.userId === userId)
                if (user)
                {
                    return resolve(user.name + " " + (roll && roll?.Enrollno))
                }
                else
                {
                    reject(`No such user with name: ${name}`);
                }
            })
        }
        return getnum
    }