document.getElementById('gname').addEventListener('click',getname)
document.getElementById('gjson').addEventListener('click', getjson)
document.getElementById('gdata').addEventListener('click', getData)
document.getElementById('addPost').addEventListener('submit',addPost);


function getname() 
{
    fetch('sample.txt')
    .then((res)=>res.text())
    .then((data)=> document.getElementById('check').innerHTML= data)
     .catch((err)=> console.log(err))   
}

 
function getjson() 
{

    fetch('temp.json')
    .then((res)=>res.json ())
    .then((data)=>
    {
        let check =  '<h2 class="mb-4">Characters</h2>';
         data.forEach((char) =>
        {
            check +=
            `
            <ul class="list-group mb-3">
                <li class="list-group-item">Id : ${char.id} </li>
                <li class="list-group-item">Name : ${char.name} </li>
                <li class="list-group-item">about :${char.name} is known as a ${char.about} </li>
                <li class="list-group-item">If character say ,"${char.favword}" that means he is ${char.name}
            </ul>
            `
         })
        document.getElementById('getj').innerHTML= check
    })
    .catch((err)=>console.log(err))
     
 }

function getData() 
{

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
    .then((res)=>res.json ())
    .then((data)=>
    {
        let check =  '<h2>Posts</h2>';
         data.forEach((post) =>
        {
            check +=
            `
            <div class="card card-body mb-3">
            <h3>${post.title}</h3>
            <p> ${post.body}</p>
             
            </div>
            `
         })
        document.getElementById('getd').innerHTML= check
    })
    .catch((err)=>console.log(err))
}

// document.getElementById('adddata').addEventListener('submit ',addData)

// function addData(add)
//  {
//      add.preventDefault()

//      let title = document.getElementById('title').value
//      let about = document.getElementById('about').value

//      fetch('https://jsonplaceholder.typicode.com/posts/',
//      {
//          method : 'POST',
//          headers:{
//              'Accept': 'application/json, text/plain,*/*',
//              'content-type':'application/json'
//          },
//          about: JSON.stringify( {title:title,about:about})
//      }
//      )
//      .then((res)=>res.json())
//      .then((data)=>console.log(data))
//         }
function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=1',
    {
        method : 'POST',
        headers: {
            'Accept':'application/json,text/plain, */*',
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({title:title,body:body})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}
document.getElementById('clear').addEventListener('click',Clear)
function Clear()
{
    document.getElementById('addPost').reset()
    document.getElementById('check').innerHTML = " ";
    document.getElementById('getj').innerHTML = " ";
    document.getElementById('getd').innerHTML = " ";
}
Clear()
