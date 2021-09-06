console.log("Running");



document.getElementById('get').addEventListener('click',getpost)
document.getElementById('post').addEventListener('click',addpost)
document.getElementById('update').addEventListener('click',updatepost)
document.getElementById('delete').addEventListener('click',deletepost)

function getpost(){

    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
    //     params:{
    //         _limit: 5
    //     }
    // })
    // .then(res => console.log(res))
    // .catch(err => console.error(err))


    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(res => console.log(res))
    .catch(err => console.error(err))

}

function addpost(){

    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title: 'New Post',
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))    

}

function updatepost(){

    axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
        title: 'Updated todo',
        body: 'Patel Darshan',
        completed: true
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))

}

function deletepost(){

    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res))
    .catch(err => console.error(err))

}