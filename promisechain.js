//promise chaining
var ani = false;
var anime = new Promise(function (resolve, reject) {
    if (!ani) {
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
var about = function (animed) {
    var description = animed.name + " is an anime. It's an " + animed.category + " type anime." + animed.name + " have " + animed.episodes + " episodes.";
    // console.log(description)
    return Promise.resolve(description);
};
anime.then(about)
    .then(function (data) {
    console.log(data);
})["catch"](function (err) {
    console.log(err.message);
});
console.log(anime);
