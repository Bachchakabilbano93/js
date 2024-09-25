let map = new Map();

map.set("Abir", "Java");
map.set("John", "Android");
map.set("Karan", "ML");
map.set("Abir", "JS");

console.log(map.keys());
console.log(map.has("John"));
console.log(map.get("Karan"));

for (let [k, v] of map) {
    console.log(k, " : ", v);
};

map.forEach((v, k) => {
    console.log(k, " : ", v);
})