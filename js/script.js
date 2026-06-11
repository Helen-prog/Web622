"use strict";
/* let message = "Третий скрипт";  // let, const, var
console.log(message);

let a = 10;  // инициализация переменной
console.log(a + 3); */

/* let b;
b = 5;
console.log(b);
b = "Hello";
console.log(b); */

// let name2 = "Ирина";
// let $camelCase = "";
// let snake_case = "";

// const b = 5;
// console.log(b);
// b = "Hello";
// console.log(b);

// let a = "Hello \
// World";
// console.log(a, typeof(a));
// let b = 'Hello World';
// console.log(b, typeof(b));
// let c = `Обратные ${5 + 2}
// кавычки`;
// console.log(c, typeof(c));

// let firstName = "Sergey";
// alert(`Hello, ${firstName}`);


/* let days = 365;
let name = "Земля"
let people = "7 млрд."
let star = "Солнце"
 
alert(`Мы живем на планете ${name}, она делает один оборот вокруг ${star} за ${days} дней. Население нашей планеты составляет примерно ${people} человек.`) */


// let a = true;
// console.log(a, typeof(a));

// let res = confirm("Знаете HTML?");
// console.log(res);  // OK - true, Отмена - false
// if(res){
//     alert("Пора учить JavaScript");
// } else {
//     alert("Нужно выучить");
// }

// let a = null;
// console.log(a);


// let name = prompt("Ваше имя", "Богдан");
// console.log(name);  // OK - введенное значение, Отмена - null

// let a = 12;
// let b = 8;

// console.log("+:", a + b);
// console.log("-:", a - b);
// console.log("*:", a * b);
// console.log("/:", a / b);
// console.log("%:", a % b);
// console.log("**:", a ** 2);

// let c = 23;
// let d = 6;
// console.log(c + d);

// let a = "Hello";
// let b = "World";
// console.log(a + b);  // конкатенация строк


// let c = 23;
// let d = "6";
// console.log(c + d);

// let login = prompt("Login", "admin");
// let password = prompt("Password", "qwerty");
// alert("\t***Данны для ввода***\nВаш логин: " + login + "\nВаш пароль: " + password + "\nДокумент \"script.js\"  лежит в папке D:\\\\folder\\file");
// console.log("\t***Данны для ввода***\nВаш логин: " + login + "\nВаш пароль: " + password + "\nДокумент \"script.js\"  лежит в папке D:\\\\folder\\file");

// let a = parseInt(prompt("Введите первое число:", 10));
// let b = Number(prompt("Введите второе числое:", 5));
// // a = parseInt(a);
// // b = Number(b);
// // console.log(typeof a);
// // console.log(typeof b);
// console.log("Сумма: " + (a + b));

// console.log(parseInt("21.84"));  // 21
// console.log(parseFloat("21.84"));  // 21.84
// console.log(Number("21.84"));  // 21.84

// console.log(parseFloat("21.84143").toFixed(2));

// console.log(+"21.84");
// console.log(+true); // 1
// console.log(+false); // 0

// console.log(String(56));

// let num = +prompt("Введите число: ", 9753);  // 4321
// let one, two, three, four;
// console.log("Исходное число:", num);

// one = num % 10;  // 1
// num = parseInt(num / 10);
// two = num % 10;  // 2
// num = parseInt(num / 10);
// three = num % 10;  // 3
// num = parseInt(num / 10);
// four = num % 10;  // 4
// // console.log(+("" + one + two + three +  four));

// console.log("Обратное число", one * 1000 + two * 100 + three * 10 + four);


// console.log("6a" / "2");

// let a = 5, b = 5;
// --a;
// console.log(a);
// b--;
// console.log(b);


// let a = 0, b = 0;
// let c = a++ + 2;   // c = 0 + 2 => 2, a = 1
// let d = ++b + 2;   // d = 1 + 2 => 3, b = 1
// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);
// console.log("d =", d);



let a = 1;
let b = ++a;
let c = b + 5 + a; // 2 + 5 + 2 = 9
console.log(c);  
