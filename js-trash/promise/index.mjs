

// const div = document.querySelector("#div");



// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch(error => console.log(error.message))

  
// const promis = new Promise((resolve, reject) => {
//   if(Math.random() > 0.5) {
//     resolve("Ура успех");
//   } else {
//     reject("Увы осечка");
//   }
// })

// promis
// .then((data) => console.log("Полученные данные:", data))
// .catch((error) => console.log("Полученные данные:", error))
// .finally(() => console.log("Конец загрузки:"))



// async function loadJson(url) {
//   try {
//     let response = await fetch(url);
//     return response.json()
//   } catch (error) {
//     console.log(error);
//   }
// }

// loadJson('no-such-user.json') // (3)

// const getData = async (url) => {
//   try {
//       const response = await fetch(url);
//       if(response) {
//         const dataParse = await response.json();
//         return dataParse
//       }
//   } catch (error) {
//     console.error(error);
//   }
// }
// const data = await getData("https://jsonplaceholder.typicode.com/todos");
// console.log(data)


import { fruits, name } from "./vars.mjs";

fruits.forEach(fruit => {
    console.log(fruit);
})

console.log(name);

const setItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const array = [1, 2, 3, 4, 5]

setItemToLocalStorage("numbers", array)