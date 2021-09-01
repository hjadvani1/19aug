
let student  =[
    {
        name: 'darshan',
        surname:'patel',
        email:'danpatel22@gmail.com',
        age: 22,
    },
    {
        name: 'Hitesh',
        surname:'Chhatvani',
        email:'hiteshc@gmail.com',
        age: 40,
    },
    {
        name: 'Hiren',
        surname:'Jadvani',
        email:'hirenj@gmail.com',
        age: 15,
    },
    {
        name: 'Sahil',
        surname:'patel',
        email:'sahilp@gmail.com',
        age: 30,
    },
];
const getdata = async () =>{
    try
    {
            let str = JSON.stringify(student)
            localStorage.setItem("student",str)
            const user = await find(input = prompt("Enter the index name: "))
    }
    catch(e)
    {
        console.log("Error....",e);
    }
}
getdata()
function find()
{
    return new Promise(async (resolve,reject)=>
    {
        var name = await localStorage.getItem('student')
        // console.log("input", input);
        var a = JSON.parse(name)
        switch(input)
        {
            case 'name':
            {
                    const n = a.map((n)=> n.name)
                    console.log('name: ', n);
                    // console.log(student.n);
                    resolve(n)
                    break;
            }
            case 'surname':
            {
                    const s = a.filter((sn)=> sn.surname == 'patel')
                    console.log('surname:', s);
                    resolve(s)
                    break;
            }
            case 'email':
            {
                    const e = a.find((e)=>
                {
                if (e.age >30)
                {
                    console.log('email: ',e.email);
                    resolve(e.email)
                }
            })
                    break;
            }
            case 'delete':
                var d = prompt("Enter the index name you want to delete: ")
                console.log(d,"abc");
                var p = a;
                p = a.map((n)=> {delete n.name
                    console.log(n);
                    return n;
                })
                console.log(p);
                // d = localStorage.removeItem(a.email)
                // console.log("email removed successfully");
                // console.log(d);
                // d = localStorage.removeItem(a.surname)
                // console.log("surname removed successfully");
                // console.log(d);
                var del = await localStorage.getItem('student')
                var abc = JSON.parse(del)
                console.log(abc);
                // const abc = localStorage.getItem('name')
                // console.log(abc);
                // localStorage.removeItem('name')
                // console.log(localStorage.getItem('name'));
                // const r = student.map(item => {
                //    delete item.name
                //    return item
                // })
                // student = r;
                // console.log(student);
                // const n = student.map((n)=> n.name)
                // console.log(n);
                break;
                    default:
                        reject("Wrong index :( ")
        }
    })
}