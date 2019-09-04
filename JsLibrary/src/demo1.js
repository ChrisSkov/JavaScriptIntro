var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"]; //concat does NOT mutate an existing array

const all = boys.concat(girls);
console.log(all.join(","));
console.log(all.join("-"));
all.push("Lone", "Gitte");
console.log(all);
all.unshift("Hans", "Kurt");
console.log(all);
all.shift("Hans");
console.log(all);
all.pop("Gitte");
console.log(all);
all.splice(3,2);
console.log(all);
all.reverse();
console.log(all);
all.sort();
console.log(all);
console.log(all.map(a => a.toUpperCase()));
const result = all.filter(word => word.startsWith("L"));
const result_ = all.filter(word => word.startsWith("l"));
console.log(result + " " + result_);


