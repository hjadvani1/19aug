var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var cast = [];
cast = ["chandler", "joey", 'ross', 'monica', 'rachel', 'phoebe'];
// console.log(cast);
function showCast(arr) {
    cast.sort();
    console.log(cast);
}
// showCast(cast)
//spread operator
var c1 = ["tanjiro", 'nezuko', 'zenitsu'];
var c2 = ["itadori", 'megumi', 'gojo'];
var c3 = __spreadArrays(c1);
console.log("copied array using spread operator... :-} " + c3);
var c4 = __spreadArrays(c1, c2);
console.log("array merged using spread operator.... :- " + c4);
var anime;
(function (anime) {
    anime[anime["naruto"] = 0] = "naruto";
    anime[anime["onepiece"] = 1] = "onepiece";
    anime[anime["AOT"] = 2] = "AOT";
    anime[anime["JJK"] = 3] = "JJK";
})(anime || (anime = {}));
var ani = anime.AOT;
function getAnime() {
    switch (ani) {
        case anime.naruto:
            console.log("You watched naruto");
            break;
        case anime.onepiece:
            console.log("you didnt watch it ");
            break;
        case anime.AOT:
            console.log("You wacthed it 3 times..daymm");
            break;
        case anime.JJK:
            console.log("you watched it ");
            break;
    }
}
getAnime();
//fpreach
var series = [];
series = ['Friends', 'Brooklyn99', 'HIMYM'];
var sitcom = [];
series.forEach(function (ser) {
    sitcom.push(ser);
});
console.log(sitcom);
//map
var usemap = new Map();
usemap.set(1, "Chandler");
usemap.set(2, "joey");
usemap.set(3, "ross");
// console.log(JSON.stringify(usemap));
// console.log(usemap);
for (var _i = 0, _a = usemap.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
for (var _b = 0, _c = usemap.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("map values :- " + value);
}
console.log("the map enteries are :");
for (var _d = 0, _e = usemap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log("best charcter in FRIENDS iS " + entry[0]);
}
var empObject = {};
empObject.name = "chandler";
empObject.age = 25;
empObject.gender = "Male";
console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);
