// //Оператор нулевого слияния (??)

// let height = 0;

// console.log(height || 100);
// console.log(height ?? 100); //оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.

// // Оператор нулевого присваивания (??=)

// let userAge = null;

// userAge ??= 18;
// console.log(userAge); //Оператор ??= присвоит x значение y только в том случае, если x не определено (null/undefined).

// let num1 = 10,
//     num2 = 20,
//     result;

//     result ??= num1 ?? num2
//     console.log(result);

// //Цикл «while»

// let a = 0;
// while(a <= 3) {
//     console.log(a);
//     a++
// }

// let counteNumbers = 0;

// while(true) {
//     // let inputNumbersCostomer = prompt("Введите число", "");

//     if(inputNumbersCostomer === null || inputNumbersCostomer === "") {
//         break;
//     }
//     let converInputNumbersCostomer = Number(inputNumbersCostomer);

//     if(isNaN(converInputNumbersCostomer)) {
//         alert("Вы ввели не число, попробуйте ещё");
//         continue;
//     }

//     counteNumbers += converInputNumbersCostomer

// }

// alert(`Сумма: ${counteNumbers}`);

//Конструкция "switch"

// const numberInput = prompt('Введите число между 0 и 3', '');

// switch (Number(numberInput)) {
//     case  0:
//     alert('Вы ввели число 0');
//         break;

//     case 1:
//     alert('Вы ввели число 1');
//         break;

//     case 2:
//     case 3:
//     alert('Вы ввели число 2, а может и 3');
//         break;

//     default:
//     alert('Вы ввели не правильное число');
//         break;
// }

// let oldUser = 100;
// switch (true) {
//   case oldUser < 18:
//     console.log("Нет доступа");
//     break;
//   case oldUser >= 18 && oldUser < 30:
//     console.log("Привет");
//     break;
//   case oldUser >= 30 && oldUser < 50:
//     console.log("Добро пожаловать");
//     break;
//   default:
//     console.log("Досвидание");
//     break;
// }

// const vv = "Igor";

// for (let index = 0; index < vv.length; index++) {
//     console.log(vv[index]);
// }

// console.log(vv);

// const fun = (a, b) => {
//     return a + b;
// }

// console.log(fun(10, 5));


//FUNCTION

// function checkAge(age) {
//     if(age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const getAge = 10;

// if(checkAge(getAge)) {
//     console.log("Доступ получен!");
// } else {
//     console.log("Доступ закрыт!");
// }

// тонкое отличие состоит в том
// .Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// После того, как поток выполнения достигнет правой части выражения присваивания 
// let sum = function… – с этого момента, функция считается созданной и может быть использована.

// С Function Declaration всё иначе.
// Function Declaration может быть вызвана раньше, чем она объявлена.
// Другими словами, когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration
//  и создаёт все такие функции. Можно считать этот процесс «стадией инициализации».

//ARROW FUNCTION

// const ask = (question, yes, no) => {
//   return confirm(question) ? yes() : no();
// }

// ask("Вы согласились?", () => {alert("Вы согласились.")}, () => {alert("Вы отменили выполнение.")});

// все локальные области видимости и их переменные объявленнные в в локальной области после вызова фукции уничтожаются

// const user = {
//   name: "Igor",
//   age: 36,
//   isActive: true
// }

// for (let property in user) {
//   console.log(property);
// }

// const  local = "city"
// user[local] = "Los Angeles"

// console.log(user);

// console.log("name" in user) ;



// let schedule = {
//   name: "Igor"
// };

// const isEmpty = (obj, property) => {
//   return property in obj;
// }

// console.log(isEmpty(schedule, "name"));


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// const sumSalaries = (obj) => {
//   let sum = null;
//   for(let prop in obj) {
//     sum += obj[prop]
//   }
//   return sum;

// }

// console.log(sumSalaries(salaries));

//OBJECT
// Сравнение по ссылке
// Два объекта равны только в том случае, если это один и тот же объект. скопированн объект от щбъекта т у них свои ссылки к этому объекту



// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// const multiplyNumeric = (obj) => {
//   for(let prop in obj) {
//     if(typeof obj[prop] == "number") {
//       obj[prop] *= 2;
      
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));



// const countOfA = 10;

// const myFunc = () => {
//   const myInnerFunc = () => {
//     let countOfB = 5;
//     return countOfA * countOfB;
//   }
//   return myInnerFunc();
// }

// console.log(myFunc());



// let objTarget = {
//   name: "Igor",
//   age: 36,
//   size: {
//     width: 180,
//     heigt: 80
//   },
//   sayHi() {
//     console.log(`Hi ${this.name}`);
    
//   }
// }

// let cloneObjTarget = Object.assign({}, objTarget);
// console.log(cloneObjTarget);

//Если скопированное имя свойства уже существует, оно будет перезаписано:
//вложенные объекты тоже копируются по ссылке

// let newObjTarget = {};
// for(let key in objTarget) {
//   newObjTarget[key] = objTarget[key]
// }

// console.log(newObjTarget);

// console.log(objTarget.sayHi());


// function newFun(arr) {

//   return this.arr;
// }
// console.log(newFun("Igor"));


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// console.log(user.ref.name );

// const calculator = {
//   a: null,
//   b: null,
//  setValues(x, y) {
//     this.a = x
//     this.b = y
//   },
//   sum() {
//     return this.a + this.b
//   }
// }


// calculator.setValues(5, 10);
// console.log(calculator.sum());

// let user = {
//   name: null,
//   age: null,
//   setName(name) {
//     this.name = name;
//     return this
//   },
//   setAge(age) {
//     this.age = age;
//     return this
//   },

//   printUser() {
//     return `I ${this.name}, and me ${this.age}`
//   }
// }

// console.log(user.setName("Igor").setAge(36).printUser());

// class Animal {
//   constructor(name, say) {
//     this.name = name;
//     this.say = say;
//   }
//   speak() {
//     return `This ${this.name}, ${this.say} `
//   }
// }

// const dog = new Animal("Spike", "gav, gav");
// console.log(dog.speak());

// const user = {
//   name: "Igor",
//   age: 36,
// }

// console.log(user.toString());



// setTimeout(() => console.log("Hi Igor"), 2000);
// setTimeout(console.log("Сейчас сразу!"), 2000);

// const errorFunc = () => {
//   throw new Error("Some Error");
// }

// try {
//   errorFunc();
// } catch (error) {
//   console.log(error.message);
// }

// console.log("Continue");

// const obj1 = {
//   name: "Igor",
//   age: 36
// }

// const obj2 = {
//   name: "Igor",
//   age: 36
// }

// const areObjectsequal = (obj1, obj2) => {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if(keys1.length !== keys2.length) {
//     return false;
//   }

//   for(let key in obj1) {
//     if(obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(areObjectsequal(obj1, obj2));

// const userInfo = {
//   name: "John",
//   age: 20,
//   address: {
//     country: "USA",
//     city: "Los Angeles"
//   }
// }

// console.log(userInfo.address?.city);



// //STRING
// const list = "Goust";
// console.log(list.indexOf("S"));
// let newstr = list[0].toLowerCase() + list[1] + list[2] + list[3] + list[4]
// console.log(newstr);

// console.log(list[0] = I);
// // console.log(list.at(-1));
// for(let char of list) {
//   setTimeout(() => console.log(char), 1000 )
// }

// let sizeStr = "JavaScript  ";
// const subStr = sizeStr.trim().slice(4);
// const subStr2 = sizeStr.substring(3);
// const subStr3 = sizeStr.substr(2, 3);
// console.log(subStr);
// console.log(subStr2);
// console.log(subStr3);

// let codeStr = "";
// for(let i = 200; i <= 250; i++) {
//   codeStr += String.fromCharCode(i);
// }

// console.log(codeStr);

// let repeatStr = " Igor ";
// console.log(repeatStr.trim().repeat(3));
// console.log(repeatStr.trim().replace("Igor", "Hi-Igor"));

// //ВЕРНУТЬ СТРОКУ С ПЕРВОЙ ЗАГЛАВНОЙ БУКВОЙ

// const ucFirst = (str) => {
//   let strupperCase = "";
//   str.trim();
//   if(!str == "" && typeof str === "string") {
//     return strupperCase = str[0].toUpperCase() + str.slice(1);
//   }
//   return 
// }

// console.log(ucFirst("вася"));

// //функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// const checkSpam = (str, sub1, sub2) => {

//   if(str.toUpperCase().includes(sub1.toUpperCase()) || str.toUpperCase().includes(sub2.toUpperCase())) {
//     return true;
//   } else {
//     return false
//   }
// }

// console.log(checkSpam('buy ViAgRA now', 'viagra', 'XXX'));


// // Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// //  заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// // Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// const truncate = (str, lengthStr) => {
//   let sliceStr = "";
//   if(str.length > lengthStr) {
//     return sliceStr = str.slice(0, lengthStr - 1) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );

// // Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// // Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение
// //  и возвращать его.

// const extractCurrencyValue = (str) => {
//   let int = null;
//   if(str.trim()[0] !== "string") {
//     return int = Number(str.slice(1));
//   } else {
//     return
//   }
// }
// console.log(extractCurrencyValue('$120'));



// const myString = "Hi Igor";
// console.log(myString.includes("Igor"));
// console.log(myString.indexOf("Igor"));


// //ARRAY

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits.at(-1));
// console.log(fruits.pop());
// console.log(fruits.push("Груша"));
// console.log(fruits.push("Ананас", "Лимон"));
// console.log(fruits);
// console.log(fruits.toString());

// for (let fruit of fruits) {
//   const iteratArr = fruit
//   console.log(iteratArr);
// }


// const styles = ["Джаз", "Блюз"];
// console.log(styles.push("Рок-н-ролл"));
// const deletItem = styles.shift()
// console.log(deletItem);
// console.log(styles.unshift("Рэп", "Регги"));
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Классика"
// console.log(styles);


// const sumInput = () => {
//   let arr = [];
//   while(true) {
//     let inputNum = prompt("Введидите число", 0);
//     if(inputNum === null || inputNum === "" || !isFinite(inputNum)) {
//       break;
//     } else {
//       arr.push(+inputNum)
//     }
//   }
// let sumNum = null;
//   for(let num of arr) {
//      sumNum += num;
//   }
//   return alert(sumNum)
// }
// sumInput()


console.log(getMaxSubSum([-1, 2, 3, -9]));




