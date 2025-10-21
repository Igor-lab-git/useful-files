
const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formElement);

  formData.append("example", "bla-bla-bla");
 
  console.log(Object.fromEntries(formData));
  
  
});

const user = [ ['username', 'John'], ['email', 'john@example.com'], ['age', '25'] ]

console.log(Object.fromEntries(user));
