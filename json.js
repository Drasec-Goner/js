const dataObject = {
    name: "John",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(dataObject);
console.log(jsonString);
console.log(typeof(jsonString));


const jsonString1 = '{"name": "John", "age":30, "city": "New York"}';
const dataObject1 = JSON.parse(jsonString1);
console.log(dataObject1);
console.log(typeof(dataObject1));