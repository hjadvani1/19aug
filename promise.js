// const posts = [
//     {
//         title : "Post 1",
//         body : "This is the Post one"
//     },
//     {
//         title : "Post 2",
//         body : "This is the Second post"
//     },
//     {
//         title : "Post 3",
//         body : "This is the Third post"
//     },
//     {
//         title : "Post 4",
//         body : "This is the fourth post"
//     }
// ];
// let user = new Promise((resolve,reject)=>{
//     let post = '';
//    posts.forEach(element => {
//         return post +=  element.title ;
//     })
//         resolve(post)
// })
// user.then((post)=>console.log(post))
var check = false;
var show = new Promise(function (resolve, reject) {
    if (!check) {
        var animed = {
            name: "naruto",
            category: "Action",
            episodes: 720
        };
        resolve(animed);
    }
    else {
        resolve(new Error("Dont know what an anime"));
    }
});
show.then(function (data) {
    console.log(data);
})["catch"](function (err) {
    console.log(err.message);
});
