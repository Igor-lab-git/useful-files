

let name = "John";
const fruits = ["apple", "banana", "orenge"];

const getItemFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
const newArray = getItemFromLocalStorage("numbers");
console.log(newArray);


export {name, fruits}