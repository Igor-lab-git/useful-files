// const divElement = document.createElement("div");
//
// divElement.style.width = "200px";
// divElement.style.height = "200px";
// divElement.style.border = "1px solid red";
// window.document.body.appendChild(divElement);
//
// console.log(navigator.userAgent);
// console.log(location.href);
//
// window.localStorage.setItem("user", JSON.stringify({id: 1, name: "Igor", "age": 36 }));
// const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);
//
// console.log(document);
//
// const innerWidth = 10;
// const innerHeight = 20;
// console.log("Ширина", window.innerWidth);
// console.log("Высота", window.innerHeight);
// console.log(innerHeight);
// console.log(innerHeight);

console.log(document.body.parentElement);
console.log(document.body.previousElementSibling);
console.log(document.body.nextElementSibling);
console.log(document.body.children);
const bodyChildren = document.body.children;
console.log(bodyChildren);

const button = document.createElement('button');
document.body.append(button);

console.log(bodyChildren)

// const arrayBodyChildren = [...bodyChildren];
// arrayBodyChildren.forEach((element) => {
//     console.log(element)
// })
console.log(bodyChildren[0]);
console.log(document.body.lastElementChild);
console.log(document.body.lastChild);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

const content = document.getElementById("content");
content.style.backgroundColor = "green";

const list = document.querySelectorAll("#list > li");


const arrayList = [...list].forEach((el) => console.log(el.textContent));

const newButton = document.querySelector("#button");

const link = document.querySelector("#link");
const isParent = link.closest("#list");
console.log(isParent);
const allInput = document.querySelectorAll("input");
for(let inputItem of [...allInput]) {
    console.log(inputItem.value);
}

console.log(allInput[0].value = "Igor")

const newAllInput = document.getElementsByTagName("input");
console.log(typeof newAllInput)
console.log(typeof allInput)

console.log(window)

console.log(document.body)
console.dir(document.body)

const label = document.querySelector("#label");
console.log(typeof  label.innerHTML)

console.log(list[0].innerText = "<div>Привет<img src='smile.gif'/> !</div>")
const newItem = document.createElement("p");
list[3].append(newItem)
newItem.outerHTML = "<p>My new Text LI</p>";

console.log(list[2].textContent);

let news = document.querySelector("#news")
console.log(news.textContent= "Введите ваше имя?, <b>Винни-пух!</b>");
console.log(news.innerHTML= "Введите ваше имя?, <b>Винни-пух!</b>");


button.addEventListener("click", () => {
    news.hidden = true
})

const inputText = document.querySelector("#inputText");
console.log(inputText.type );
console.log(inputText.id );
console.log(inputText.value );



const bodyElement = document.querySelector("body")
console.log(list[2].outerHTML);

const paragraph = document.querySelector("#paragraph");
console.log(paragraph.innerText);

const listTest = document.querySelectorAll("#listTest > li");

[...listTest].forEach(el => console.log(el.textContent))
console.log(listTest.length);






