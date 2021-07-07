const details = {
    name : "Aroon",
    age: 21,
};
console.log(details);
const jsondata = JSON.stringify(details);
console.log(jsondata);
console.log(JSON.parse(jsondata));