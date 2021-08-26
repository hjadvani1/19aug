const users =
[
    {
    id : 1, name : "Hitesh"
    },
    {
        id : 2, name : "Darshan"
    },
    {
        id : 3, name : "Sahil"
    },
    {
        id : 4, name : "Hiren"
    }
]
const articles = [
        {userId : 1, articles : ["one","two","Three"]},
        {userId : 2, articles : ["four","FIve"]},
        {userId : 3, articles : ["six","seven","Eight","Nine"]},
        {userId : 4, articles : ["Ten","Eleven"]}
]
const getUser = (name) => {
    return new Promise ((resolve,reject)=>{
        const user = users.find((user)=>user.name === name )
        console.log(user);
        if(user) {
            return resolve(user)
        }else{
            reject(`No Such User Exists with name : ${name}`)
        }
    })
}
getUser("Hiren");
const getArticles=(userId)=> {
    return new Promise ((resolve,reject)=>{
        const userArticles = articles.find((user)=> user.userId === userId)
        console.log(userArticles);
        if(userArticles) {
            return resolve(userArticles.articles)
        }
        else
        {
            reject('Wrong Id')
        }
    })
}
getUser("Hitesh").then((user)=>getArticles(user.id)).then(articles => console.log(articles)).catch(err=>console.log(err));
// With Help of Async Await
const getUserData = async () =>{
    try {
    const user = await getUser("Dashan");
    const articles = await getArticles(user.id)
    console.log(articles);
    }
    catch (error) {
        console.log(error);
    }
}
getUserData();
// this.then(getUser(char=>{console.log(char)}))