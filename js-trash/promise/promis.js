
const div = document.querySelector("#div");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(error => console.log(error.message))

  
const promis = new Promise((resolve, reject) => {
  if(Math.random() > 0.5) {
    resolve("Ура успех");
  } else {
    reject("Увы осечка");
  }
})

promis
.then((data) => console.log("Полученные данные:", data))
.catch((error) => console.log("Полученные данные:", error))
.finally(() => console.log("Конец загрузки:"))



async function loadJson(url) {
  try {
    let response = await fetch(url);
    return response.json()
  } catch (error) {
    console.log(error);
  }
}

loadJson('no-such-user.json') // (3)
