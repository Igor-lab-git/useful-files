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

console.dir(listTest)

const thirdBoxElement = document.querySelector(".box-3");
const firstBoxElement = thirdBoxElement.closest(".box-1");
const secondBoxElement = thirdBoxElement.closest(".box-2");
console.dir(thirdBoxElement);
console.dir(firstBoxElement);

const listElement = document.querySelector("[data-js-list]");
const itemsElementList = document.querySelectorAll("[data-js-list-item]");
console.log(listElement);
console.log(itemsElementList[0]);


const formSignIn = document.querySelector("[data-js-form-sign-in]");
const inputPassword = document.querySelector("[data-js-form-input-password]")
console.log(formSignIn.action);
console.log(inputPassword.value);
for(let attr of inputPassword.attributes) {
    console.log(`${attr.name} = ${attr.value}`);
}
formSignIn.action = "/register";
console.log(inputPassword.name);



console.log(thirdBoxElement.getAttribute("data-some-value"));
console.log(firstBoxElement.getAttribute("data-id"))
console.log(secondBoxElement.setAttribute("data-js-id", "2"));
console.log(secondBoxElement.hasAttribute("data-js-id"));

const linkHello = document.querySelector("#a");
console.log(linkHello.href)
const divElementAttr = document.querySelector("[data-widget-name]")
console.log(divElementAttr.getAttribute("data-widget-name"))
console.log(divElementAttr.dataset.widgetName);

const listLink = document.querySelectorAll("a");

for(let link of listLink) {
    const isHrefToLink = link.getAttribute("href");
    if(!isHrefToLink) continue;
    if(!isHrefToLink.includes("://")) continue;
    if(isHrefToLink.startsWith("http://internal.com")) continue;
    link.style.color = "orange";
}


const divElement = document.createElement("div");
divElement.className = "alert";
divElement.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение."


bodyElement.append(divElement); //ДОБАВИТЬ В КОНЕЦ 
const divElementClone = divElement.cloneNode(true); //КЛОНИРОВАНИЕ ЭЛЕМЕНТА
divElement.after(divElementClone.innerText = "Hy my frands") //ДОБАВИТЬ В КОНЕЦ НУЖНОГО ЭЛЕМЕНТА


const btnElementBeforeLink = document.createElement("button").textContent = "BUTTON-BEFORE";
formSignIn.before(btnElementBeforeLink);


const divStyle = document.querySelector("#divStyle");
const btnToggle = document.querySelector("#btnToggle");
btnToggle.addEventListener("click", () => {
    divStyle.classList.toggle("error")
})

const hasError = false;

divStyle.classList.toggle("error", hasError);


const btnShowModal = document.querySelector("#btnShowModal");
const modalElement = document.querySelector("#modal");
const btnClose = document.querySelector("#close");

btnShowModal.addEventListener("click", () => {
    modalElement.classList.add("modalBlok")
})
btnClose.addEventListener("click", () => {
    modalElement.classList.remove("modalBlok")
})
console.log(modalElement.classList.contains("modal"));

console.log(window.getComputedStyle(btnClose).color); //УЗНАТЬ ВСЕ ИЛИ КОНКРЕТНЫЙ СТИЛ ВО ВСЕ СТИЛЯХ КОСКАДНОЙ ТАБЛИЦЫ


const showNotification = () => {
    const divElementShowNotification = document.createElement("div");
    divElementShowNotification.classList.add("notification");
    divElementShowNotification.textContent = "Hello!";
    document.body.append(divElementShowNotification);
    setTimeout(() => divElementShowNotification.remove(), 1500)
}
showNotification();

const htmlElement = document.documentElement
console.log(htmlElement.clientHeight);
console.log(htmlElement.clientWidth);
console.log(htmlElement.scrollHeight);
console.log(htmlElement.scrollWidth);

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
console.log(scrollHeight); //АКТУАЛЬНАЯ ВЫЧИСЛЕННАЯ ВЫСОТА

const setScrollTop = () => {
    window.scrollBy({
        top: 30,
        left: 0,
        behavior: "smooth"
    });
} //FUNCTION ПРОСКРОЛИТЬ НУЖНОЕ КОЛЛИЧЕСТВО ПИКСИЛЕЙ ВЕРТИКАЛЬНО

const setScrollBottom = () => {
    window.scrollTo(0, 0);
}

const btnScrollTop = document.querySelector("#btnScrollTop");
btnScrollTop.addEventListener("click", () => {
    setScrollTop();
})

const btnScrollBottom = document.querySelector("#btnScrollBottom");
btnScrollBottom.addEventListener("click", () => {
    setScrollBottom();
})

// document.body.addEventListener("click",  function(event) {
//     console.log(event.clientY, event.clientY);
//     console.log(event.type, + "на" +  event.currentTarget);
// })

const btnHidden = document.querySelector("#btnHidden");
const textHidden = document.querySelector("#textHidden");

btnHidden.addEventListener("click", () => {
    textHidden.classList.toggle("hidden")
})

const btnEventElement = document.querySelector("#btnEvent");
btnEvent.addEventListener("click", (Event) => {
    console.log(Event);
})

//ВСПЛЫТИЕ 
const boxId1 = document.querySelector("#boxId1");
const boxId2 = document.querySelector("#boxId2");
const boxId3 = document.querySelector("#boxId3");

boxId1.addEventListener("click", (event) => {
    console.log("click on box 1", event.target);
})
boxId2.addEventListener("click", (event) => {
    console.log("click on box 2", event.target);
    event.stopPropagation()
    
}, true)
boxId3.addEventListener("click", (event) => {
    console.log("click on box 3", event.target);
    // event.stopImmediatePropagation()
})
// boxId3.addEventListener("click", (event) => {
//     console.log("click on box 3");
// })

// window.addEventListener("keydown", (event) => {
//     alert(`Нажата кнопка: ${event.key}`)
// }) //ПОКАЗЫВАЕТ НА КАКУЮ КНОПКУ НАЖАЛ

const wrapperBox = document.querySelector("#wrapperBox");
const articleBox = document.querySelector("#articleBox");
const textBox = document.querySelector("#textBox");

const showTagName = (event) => {
    console.log(event.currentTarget.tagName.toUpperCase());
    // event.stopPropagation()
}
wrapperBox.addEventListener("click", showTagName, {capture: true});
articleBox.addEventListener("click", showTagName, {capture: true});
textBox.addEventListener("click", showTagName, {capture: true});

wrapperBox.addEventListener("click",  showTagName);
articleBox.addEventListener("click", showTagName);
textBox.addEventListener("click", showTagName);


const listAppentChild = document.querySelector("#listAppentChild");

for(let i = 0; i <= 7; i++) {
    const newItem = listAppentChild.appendChild(document.createElement("li")); //возвращает созданный li добавленный одновременно в список ul
    newItem.textContent = `New element ${i}`;
    if(i % 2 === 0) {
        newItem.style.color = "red";
    } else {
        newItem.style.color = "yellow";
    }
}//ПРИМЕНЕНИЕ appendChild И ВОЗВРАТА ССЫЛКИ НА СОЗДАННЫЙ li

//ДЕЛЕГИРОВАНИЕ

const addItemListTodo = () => {
    const todoList = document.querySelector(".todo__list");
    const item = `<li class="todo__item" >Todo item...</li>`;
    todoList.insertAdjacentHTML("beforeend", item)
}

addItemListTodo()
addItemListTodo()
addItemListTodo()
addItemListTodo()

const todoListElement = document.querySelector(".todo__list")

todoListElement.addEventListener("click", (event) => {
    // if(event.target.classList.contains("todo__item")) {
    //     event.target.classList.add("isActive")
    // } else if(event.target.closest("todo__item")) {
    //     event.target.classList.add("isActive")
    // }

    //или
    if(event.target.tagName == "LI") {
        event.target.classList.add("isActive")
    }
}) //обработчик вешается на весь документ и ищет по contains("todo__item") тот элемент по которому ткнуль курсором

//ДЕЛЕГИРОВАНИЕ ВЛОЖЕННОГО МЕНЮ
//меню с методами в объекте и вызывающие делегированием в названии атрибутов
const mainMenu = document.querySelector("#mainMenu");

const menuActs = {
    open() {alert("open menu....")},
    save() {alert("save menu....")},
    draw() {alert("draw menu....")},
    customize() {alert("customize menu....")},
}

mainMenu.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if(li == null) return;

    const act = li.dataset.command;
    if(act && menuActs[act] !== undefined) {
        menuActs[act]();
    }
})
//скрыть меню и отобразить
document.addEventListener("click", (event) => {
    let id = event.target.dataset.toggleId;

    if(!id) return ;
    let elem = document.getElementById(id);
    if(!elem) return;
    elem.hidden = !elem.hidden;
})

// СОЗДАТЬ КРАСНУЮ ТОЧКУ НА ЭКРАНЕ ЗАФИКСИТЬ ЕЁ И ПРОГРАМНО ВЫСТОВИТЬ ЧЁТКО ПО СЕРЕДИНЕ КЛИЕНТ-ЭКРАНА
const createCerkl = () => {
    const span = document.createElement("span");
    span.style.width = 10 + "px";
    span.style.height = 10 + "px";
    span.style.backgroundColor = "red";
    span.style.position = "absolute";
    const clientX = document.documentElement.clientWidth / 2;
    const clientY = document.documentElement.clientHeight / 2;
    span.style.left = clientX + "px";
    span.style.top = clientY + "px";
    document.body.append(span);
    console.log(span.getBoundingClientRect());
    
}
createCerkl()


const inputNewAdd = document.querySelector("#inputNewAdd");

inputNewAdd.addEventListener("input", (event) => {
    console.log(event.target.value);
})

const menu = document.querySelector(".menu");

document.addEventListener("click", (event) => {
    if(event.target.closest(".btn__Menu")) {
        menu.classList.toggle("menuIsActive");
    }
    if(!event.target.closest(".menu")) {
        menu.classList.remove("menuIsActive");
    }
})

const inputKeyAdd = document.querySelector("#inputKeyAdd");
const errorMessage = document.querySelector("#errorMessage");
const printTextToInput = document.querySelector("#printTextToInput");

inputKeyAdd.addEventListener("change", (event) => {

    const invalitText = inputKeyAdd.value.length < 5
    printTextToInput.textContent = inputKeyAdd.value;

    if(invalitText) {
        inputKeyAdd.classList.toggle("isInvalud", invalitText) 
        errorMessage.textContent = invalitText ? "Минимальный текст 5 символов" : "";
    }

})

//СЛАЙДЕР

const thumb = document.querySelector(".thumb");
const slider = document.querySelector(".slider");

// Убедись что слайдер имеет position: relative в CSS
// и thumb имеет position: absolute

thumb.onpointerdown = function(event) {
    event.preventDefault(); // Предотвращаем выделение текста

    // Получаем границы слайдера
    const sliderRect = slider.getBoundingClientRect();

    // Смещение курсора внутри thumb
    const shiftX = event.clientX - thumb.getBoundingClientRect().left;

    thumb.setPointerCapture(event.pointerId);

    function onPointerMove(event) {
        // Вычисляем новую позицию
        let newLeft = event.clientX - shiftX - sliderRect.left;

        // Ограничиваем границами слайдера
        newLeft = Math.max(0, newLeft);
        newLeft = Math.min(sliderRect.width - thumb.offsetWidth, newLeft);

        thumb.style.left = newLeft + 'px';
    }

    function onPointerUp() {
        // Убираем обработчики
        thumb.onpointermove = null;
        thumb.onpointerup = null;
    }

    // Назначаем обработчики
    thumb.onpointermove = onPointerMove;
    thumb.onpointerup = onPointerUp;
};

const textareaElement = document.querySelector("#textareaElement");
const textareaOutText = document.querySelector("#textareaOutText");

textareaElement.addEventListener("input", (event) => {
    const textOut = event.target.value;
    textareaOutText.textContent = textOut;
});

//КОЛЛЕКЦИЯ ФОРМ И ИЗМЕНЕНИЕ CHANGE
const formInputOutText = document.querySelector("#formInputOutText");
const frm = document.forms[1];

frm.user.addEventListener("change", (e) => {
    console.log(e.target.value);
})
frm.user.addEventListener("cut", (e) => {
    console.log(e.target.value);
})
frm.user.addEventListener("copy", (e) => {
    console.log(e.target.value);
})
frm.user.addEventListener("paste", (e) => {
    console.log(e.target.value);
})
frm.user.addEventListener("input", (e) => {
    formInputOutText.textContent = e.target.value;
})
console.log(frm.sex);



frm.sex[0].addEventListener("change", (e) => {
    console.log("sex[0]", e.target.checked);
})
frm.sex[1].addEventListener("change", (e) => {
    console.log("sex[1]", e.target.checked);
})
frm.agree.addEventListener("change", (e) => {
    console.log("sex.agree", e.target.checked);
})
frm.city.addEventListener("change", (e) => {
    console.log("Выбран город № ", e.target.selectedIndex);
})
frm.city.options[2].selected = true;

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    if(!frm.user.value) {
        alert("Форма не заполнена")
    } else {
        alert("send form");
    }
})

