const map= new Map();

map.set("a",1)
map.set("b",2)
map.set("c",3)
map.set("d",4)

console.log(map.get("a"))

map.set("a",90);
console.log(map.get("a"));

console.log("size:",map.size);

console.log(map.has("a"));
console.log(map.has("f"));

console.log(map.delete("b"))

console.log("size:",map.size);