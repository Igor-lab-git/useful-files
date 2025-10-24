console.log(window.location);

console.log(window.history);

const dataJsForm = document.querySelector("[data-js-form");

dataJsForm.addEventListener("submit", (even) => {
    even.preventDefault();

    const formData = new FormData(dataJsForm);
    const formDataObj = Object.fromEntries(formData);
    const formDataObjString = Object.entries(formDataObj).map(([key, value]) => {
        return `${key}=${value}`
    }).join("&")
    console.log(formDataObjString);
    
})