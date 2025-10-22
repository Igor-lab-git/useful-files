
const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget); // или new FormData(event.target) or new FormData(event.currentTarget);

  const result = Object.fromEntries(formData);
  console.log(result);
});



