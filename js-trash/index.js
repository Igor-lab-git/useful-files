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

let oldUser = 100;
switch (true) {
  case oldUser < 18:
    console.log("Нет доступа");
    break;
  case oldUser >= 18 && oldUser < 30:
    console.log("Привет");
    break;
  case oldUser >= 30 && oldUser < 50:
    console.log("Добро пожаловать");
    break;
  default:
    console.log("Досвидание");
    break;
}

const vv = "Igor";

for (let index = 0; index < vv.length; index++) {
    console.log(vv[index]);
}

console.log(vv);

const fun = (a, b) => {
    return a + b;
}

console.log(fun(10, 5));


//FUNCTION

function checkAge(age) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

const getAge = 10;

if(checkAge(getAge)) {
    console.log("Доступ получен!");
} else {
    console.log("Доступ закрыт!");
}

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

const user = {
  name: "Igor",
  age: 36,
  isActive: true
}

for (let property in user) {
  console.log(property);
}

const  local = "city"
user[local] = "Los Angeles"

console.log(user);

console.log("name" in user) ;



let schedule = {
  name: "Igor"
};

const isEmpty = (obj, property) => {
  return property in obj;
}

console.log(isEmpty(schedule, "name"));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sumSalaries = (obj) => {
  let sum = null;
  for(let prop in obj) {
    sum += obj[prop]
  }
  return sum;

}

console.log(sumSalaries(salaries));


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj) => {
  for(let prop in obj) {
    if(typeof obj[prop] == "number") {
      obj[prop] *= 2;
      
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu));

