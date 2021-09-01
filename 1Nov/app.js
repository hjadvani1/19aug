// console.log("hey");
//local storage

// localStorage.setItem('lname','Jadvani')
// localStorage.setItem('fname','Hiren')
// console.log(localStorage);
// console.log(localStorage.getItem('fname'))
//                       'lname',"Jadvani")
// JSON.parse(localStorage.getItem('Name'))
// localStorage.removeItem('fname')
// localStorage.clear()

// document.getElementById('inpkey').addEventListener('submit' Submit);
// const user={
//     'fname':'Hiren',
//     'lname':'Jadvani'
// }
// localStorage.clear()
// localStorage.setItem('char', JSON.stringify(user))
// localStorage.getItem('char')


document.getElementById('submit').addEventListener('click',Submit)
const input = document.getElementById('inpkey')
const input1 = document.getElementById('inpval')
// const submit = document.getElementById('submit')
const output = document.getElementById('show')
function  Submit() {
    //e.prventDefault()
    const key = input.value;
    const value = input1.value;
        // console.log("djfhjksdhfkds", key, value );
    if(key && value)
    {
        localStorage.setItem(key,value)
    }
    // output.innerHTML= 'hello '
}
for(let i=0; i<localStorage.length; i++)
{
    const key = localStorage.key(i)
    const value= localStorage.getItem(key)
    // console.log("djfhjksdhfkds", localStorage.key(i), localStorage.getItem(key) );
    output.innerHTML += `${key} : ${value}<br />`
}
    document.getElementById('clear').addEventListener('click',Clear)
    function Clear()
    {
        // document.getElementById('addpost').reset()
        // document.getElementById('inpkey').value = " "
        // document.getElementById('inpval').value = " ";
        document.getElementById('show').innerHTML = " ";
       localStorage.clear()
    }
// Clear()
