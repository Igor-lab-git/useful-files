console.log(window.location);

console.log(window.history);



// const dataJsForm = document.querySelector("[data-js-form");
//
// dataJsForm.addEventListener("submit", (even) => {
//     even.preventDefault();
//
//     const formData = new FormData(dataJsForm);
//     const formDataObj = Object.fromEntries(formData);
//     const formDataObjString = Object.entries(formDataObj).map(([key, value]) => {
//         return `${key}=${value}`
//     }).join("&")
//     console.log(formDataObjString);
//
// })

document.cookie = "username=Igor";
document.cookie = "age=36";

const setCookie = (name, value) => {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
}
setCookie("date of birth", "август 4б 1989");

console.log(document.cookie);

const getCookie = (name) => {
    for(const entStr of document.cookie.split("; ")) {
        const [entryName, entryValue] = entStr.split("=");

    if(decodeURIComponent(entryName) === name) {
        return entryValue
    }
    }

}

console.log(getCookie("age"))