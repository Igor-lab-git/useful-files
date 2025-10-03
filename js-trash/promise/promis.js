
const div = document.querySelector("#div");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(error => console.log(error.message))