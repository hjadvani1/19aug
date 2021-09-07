var map1 = new Map();
map1.set(1, "Chandler");
map1.set(2, "joey");
map1.set(3, "ross");
// console.log(JSON.stringify(map1));
console.log(map1);
for (var _i = 0, _a = map1.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
for (var _b = 0, _c = map1.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("map values :- " + value);
}
console.log("the map enteries are :");
for (var _d = 0, _e = map1.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log("best charcter in FRIENDS iS " + entry[0]);
}
