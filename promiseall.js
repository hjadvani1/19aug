var weeb1 = new Promise(function (resolve, reject) {
    resolve("This weeb like Naruto");
});
var weeb2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This weeb like One Piece");
    }, 2000);
});
Promise.all([weeb1, weeb2]).then(function (res) { return console.log(res); });
