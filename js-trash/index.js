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


let obj = { name: "John", age: 30 };
for(let key in obj) {
  console.log(typeof obj[key]);
}


let arr = [10, "20", 30];
for(let i = 0; i < arr.length; i++) {
  console.log(typeof arr[i]);
}

let arr2 = [10, "20", 30, 50];
for(let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}

let arr3 = ["Я", "изучаю", "JavaScript", "Igor", "Array"];
arr3.splice(3, 0, "Уже", "Year");
arr3.splice(3, 2);
arr3.splice(-1, 0, "Hi", "I am here");
console.log(arr3);

let arr4 = [1, 2, 3, 4, 5, 6, 7];
let resArr4 = arr4.slice(0, 4)
let reversArr4 =  arr4.slice(-3)
console.log(resArr4);
console.log(reversArr4);
console.log(arr4.slice());

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr5 = [1, 2, 3, 4, 5];
let resArr5 = arr5.concat(arrNum.slice(-5));
console.log(resArr5);

let arr6  = ["Бильбо", "Гэндальф", "Назгул"];
arr6.forEach((item, index, array) => {
  console.log(`
    Персонаж ${item} под номером ${index} в списке "${array}"
    `);
})

let arr7 = ["Хлеб", "Молоко", "Шоколад", "Пиво"];
console.log(arr7.indexOf("Пиво"));
console.log(arr7.includes("Шоколад"));


let users = [
  {id: 1, name: "Вася", age: 25},
  {id: 2, name: "Петя", age: 20},
  {id: 3, name: "Маша", age: 29}
];
let findUser = users.find((item) => item.id == 1);
console.log(findUser);
let findindexUser = users.findIndex(i => i.name == "Маша");
console.log(findindexUser);
let filterUser = users.filter(i => i.age >= 25);
console.log(filterUser);

let arr8 = [1, 2, 3, 4, 5];
let resArr8 = arr8.map(i => String(i));
console.log(resArr8);

let arr9 = [13, 8, 2, 16, 33, 7];
let resArr9 = arr9.sort((a, b) => a - b);
console.log(arr9);

let arr10 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
arr10.reverse();
console.log(arr10);
console.log(arr10.join());


let names = 'Вася, Петя, Маша';
let arrNames = names.split(",");
for(let i = 0; i < arrNames.length; i++) {
  console.log(`
    Сообщнение получат ${arrNames[i]}
    `);
}

let arr11 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const sumArr11 = arr11.reduce((ac, el) => ac + el, 0);
console.log(sumArr11);
console.log(Array.isArray(arr11));

const camelize = (str) => {
    const resultStr = str.split("-").map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
    return resultStr;
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


const filterRange = (array, a, b) => {
    const filtredArray = array.filter(num => num >= a && num <= b);
    return filtredArray;
}
console.log(filterRange([5, 3, 8, 1], 1, 4));


const filterRangeInPlace = (array, a, b) => {
    return array.filter(num => num >= a && num <= b);
}
console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));


let arr12 = [5, 2, 1, -10, 8];
console.log(arr12.sort((a, b) => b - a));

const copySorted = (array) => {
    const sorted = array.slice().sort();
    return sorted
}

console.log(copySorted(["HTML", "JavaScript", "CSS"]));

let usersArray = [ { name: "Вася", surname: "Пупкин", id: 1 }, { name: "Петя", surname: "Иванов", id: 2 },
    { name: "Маша", surname: "Петрова", id: 3 }];

const arrayFullNames = usersArray.map((user) => {
    return {fullName: `${user.name} ${user.surname}`, id: user.id}
})

console.log(arrayFullNames);


const arrUserAge = [{ name: "Вася", age: 25 }, { name: "Петя", age: 30 }, { name: "Маша", age: 28 }];
const  sortByAge = (array) => {
    const sortUsers = array.sort((a, b) => a.age - b.age);
    return sortUsers;
}

console.log(sortByAge(arrUserAge));


let arr13 = [1, 2, 3];
const shuffle = (array) => {
   return  array.sort(() => Math.random() - 0.5)
}

console.log(shuffle(arr13));

const arrayUsersMiddleAge = [{ name: "Вася", age: 25 }, { name: "Петя", age: 30 }, { name: "Маша", age: 29 }];
const getAverageAge = (array) => {
    const middleAge = array.reduce((ac, item) => ac + item.age, 0) / array.length;
    return middleAge;
}

console.log(getAverageAge(arrayUsersMiddleAge));


let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
  const unique = (array) => {
    const uniqueWords = [];

    array.forEach(word => !uniqueWords.includes(word) ? uniqueWords.push(word) : "");
    return uniqueWords;
  }
console.log(unique(strings));

let usersIDGroup = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  const groupById = (array) => {
    const usersById = array.reduce((object, el) => {object[el.id] = el; return object}, {});
    return usersById;
  }

  console.log(groupById(usersIDGroup));
  

  const fgf = [{name: "Igor", age: 25}, {name: "John", age: 18}, {name: "Alice", age: 29}, {name: "Peter", age: 17}, ]
  console.log(fgf.filter(el => el.age > 20));
  console.log(fgf.filter(el => el.age > 20));
  console.log((fgf.reduce((ac, el) => ac + el.age, 0) / fgf.length));
  

const fgvv = {id: 1, name: "Igor", age: 25, isActive: true}

  console.log(Object.keys(fgvv));
  console.log(Object.values(fgvv));
  console.log(Object.entries(fgvv));

  const vbvgf = Object.entries(fgvv);

  //Деструктуризация

  let arr14 = ["Ilya", "Kantor"];
  const [firstName, surName] = arr14;
  console.log(firstName, surName);
  
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

const { title, width, height } = options;
console.log(title, width, height );

let user = { name: "John", years: 30 };
const { name, years, isAdmin : isAdmin  =false} = user;
console.log( name, years, isAdmin );

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = (salaries) => {
  let maxSum = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if(maxSum < salary) {
      maxSum = salary;
      maxName = name
    }
  }
  return maxName;
}

console.log(topSalary(salaries));


//Дата и время

const now = new Date();
console.log(now.getTimezoneOffset());


let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

const jsonStudent = JSON.stringify(student);
console.log(jsonStudent);
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
console.log(JSON.parse(str));

//SETTIMEOUT

let timeId = setInterval(() => console.log("Igor"), 1000);

setTimeout(() => clearInterval(timeId), 5000)

const printNumbers = (from, to) => {
  let currentNum = from;

  let timeId = setInterval(() => {
    console.log(currentNum);
    if(currentNum == to) {
      clearInterval(timeId)
    } else {
      currentNum++;
    }
  }, 1000)
}

console.log(printNumbers(1, 5));


const logMessage = (name, age) => {
  console.log(`Hi my name is ${name} and me ${age} old year`);
}

setTimeout(logMessage, 1500, "Igor", 36)

//Флаги и дескрипторы свойств

let userConfig = {
  name: "Igor"
};

Object.defineProperty(userConfig, "name", {
  writable: false
});
console.log(userConfig.name = "John");

let description = Object.getOwnPropertyDescriptors(userConfig, "name");
console.log(description);

// геттеры и сеттеры javascript КОНСТРУКТОРЫ

const userPer = {
  name: "John", 
  surName: "Smit",
  get fullName() {
    return `${this.name} ${this.surName}`
  },
  set fullName(value) {
    [this.name, this.surName] = value.split(" ")
  }
}

userPer.fullName = "Peter Karter"
console.log(userPer.name);
console.log(userPer.surName);

const product = {
  id:1,
  price: 200000,
  getPrice() {
    return this.price
  },
  set title(value) {
    return value
  },

  get title () {
    return "My mackbook " + this.price + " $"
  }
}
console.log(product.title = "Honor");

//PROTO

let geom = {
  name: "Figure",
  sp:  {x: 0, y: 0},
  ep: {x: 100, y: 20}
}

let rect = {
  draw() {
    console.log("Рисовать прямоугольник " + this.sp.x+","+this.sp.y)
  }
}
rect.__proto__ = geom;
console.log(rect.draw());
console.log(rect.name);


const userProfile = {
  name: "Igor",
  commentsQty: 25,
  age: 0,
  hasSignetAgreement: true
}
// for(let key in userProfile) {
//   console.log(userProfile[key]);
// }

Object.keys(userProfile).forEach(key => console.log(key, userProfile[key]));
Object.values(userProfile).forEach(value => console.log(value));
Object.entries(userProfile).forEach(([key, value]) => console.log(key, value));

const animal = {
  eats: true,
  walk() {
    return "Animal is walking";
  }
}

const rabbit = {
  jumps: true,
}

const longEar = {
  longEar: 10,
}

Object.setPrototypeOf(rabbit, animal);
Object.setPrototypeOf(longEar, rabbit)

console.log(rabbit.eats);
console.log(longEar.walk());
console.log(rabbit.walk());
console.log(Object.getPrototypeOf(rabbit));
console.log(animal.isPrototypeOf(rabbit));

const hjh = {a: 18};
const kh = hjh;
console.log(hjh === kh);
console.log({} != {});



//CLASS

 class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0
  }
  upvote() {
    this.votesQty += 1;
  }
  downVotesQty() {
    this.votesQty -= 1;
  }
  static mergeComments(first, second) {
    return `${first} ${second}`
  }
 }

 const firstComment = new Comment("FIRST comment");
 const secondComment = new Comment("SECOND comment");
 console.log(Comment.prototype === firstComment.__proto__);
 console.log(Comment.prototype === secondComment.__proto__);
 
console.log( Comment.mergeComments("It is FIRST comment", "It is SECOND comment"));
console.log(firstComment.hasOwnProperty("text"));
console.log(firstComment.hasOwnProperty("upvote"));

 
 class NumbersArray extends Array {
  sum() {
    return this.reduce((acc, el) => acc += el, 0)
  }
 }
 
 const myArray = new NumbersArray(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log( myArray);
console.log( myArray.sum());
console.log(NumbersArray.prototype === myArray.__proto__);


class Student {
  #city = null
  planet = "Земля"
  country = "USA"
  region
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  set city(value) {
    const [firstCityLatter, secondCityLatter] = value.split(" ");
    const modifiedFirstCityLatter = firstCityLatter[0].toUpperCase() + firstCityLatter.slice(1).toLowerCase();
    const modifiedSecondCityLatter = secondCityLatter[0].toUpperCase() + secondCityLatter.slice(1).toLowerCase();
    this.#city = `${modifiedFirstCityLatter} ${modifiedSecondCityLatter}`;
  }

  get city() {
    return `City ${this.#city}`;
  }

  logAge() {
    return this.age
  }

  eat() {
    console.log("Eating now... :)");
    
  }
}
const fourthStudent = new Student("Al", 26);
console.log(fourthStudent)


const firstStudent = new Student("John", 20);
const thirdStudent = new Student("Pete", 25);
firstStudent.city = "Los Angeles";
console.log(firstStudent.logAge());
console.log(firstStudent.city);
console.log(thirdStudent);

class Developer extends Student {
  constructor(name, age, experience) {
    super(name, age)
    this.experience = experience
  }
  writeCode() {
    console.log("Write CODE");
    
  }
  eat() {
    super.eat()
    console.log("And wothing Youtube... :)");
    
  }
}

const devStudent = new Developer("Igor", 30, 2);
console.log(devStudent);
devStudent.writeCode();
devStudent.eat();

class Car {
  _speed = 0
  constructor(mark, color, power) {
    this.mark = mark;
    this.color = color;
    this.power = power;
  }
  set speed(value) {
    if(value < 0) throw new Error("Speed avto can not mani 0") 
    this._speed = value
  }

  get speed() {
    return this._speed;
  }

  stop() {
    return `${this.mark} stoped`
  }
}

const avto = new Car("Audi", "black", 500);
avto.speed = 10
console.log(avto);
console.log(avto.stop());
console.log(avto instanceof Car);


//Обработка ошибок, "try..catch"

console.log("Begining Code");
try {
  // const names = undefined;
  // const names = ["Pete", "John", "Igor"];
    names.forEach(name => {
      console.log(`name: `, name);
   
  })
} catch (error) {
  console.log("This names undefined", error);
  console.log("This names undefined", error.message);
  console.log("This names undefined", error.name);
  console.log("This names undefined", error.stack);
}

console.log("End Code");

// try catch оборачивается в асинхронный код

setTimeout(() => {
  try {
    const a = 0;
    a.forEach((a) => console.log(a))
  } catch (error) {
    console.log("Error Code");
    
  }
}, 1000);

//не корректный json

const dataServer = "{`name`: 'Igor'}";
try {
  const user = JSON.parse(dataServer);
  console.log(user.age);
  
} catch (e) {
  const error = new Error("Упс какае-то ошибка :)")
  console.log(error.message);
}

//trow

const dataRespons = '{"age": 30}';
try {
  let user = JSON.parse(dataRespons);

  if(!user.name) {
    throw new ReferenceError("Данные неполны, нет такого имени :)")
  }
  console.log(user?.name);
  
} catch (e) {
  if(e.name == "ReferenceError") {
    console.error(`JSON Error: ${e.message}`);
  } else {
    throw e;
  }
} finally {
  let user = JSON.parse(dataRespons);
    console.log(user.age);
}

//Расширение Error

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
const userSignIn = '{ "age": 36 }';

function readUser(json) {
  let user = JSON.parse(json);

  if( !user.name ) {
    throw new ValidationError("Not field: name");
  }
  if( !user.age ) {
    throw new ValidationError("Not field: age");
  }

  return user;
}

try {
  let user = readUser( userSignIn );
} catch (error) {
  if(error instanceof ValidationError) {
    console.error("Не корректные данные: " + error.message);
  } else if(error instanceof SyntaxError) {
    console.error("JSON Ошибка синтаксиса: " + error.message);
  } else {
    throw error;
  }
}


//Промисы, async/await

//Введение: колбэки
