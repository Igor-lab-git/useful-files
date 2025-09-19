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



