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



// let a = 1;
// let b = ++a;
// let c = b + 5 + a; // 2 + 5 + 2 = 9
// console.log(c);  

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(7 == 7);
// console.log(7 != 7);
// console.log(5 >= 5);
// console.log(5 <= 3);
// console.log(7 === "7");
// console.log(7 !== "7");

// let a = 10;
// console.log(a);  // 10

// a += 5;  // a = a + 5
// console.log(a);  // 15

// a -= 3;  // a = a - 3
// console.log(a); // 12

/* let a = +prompt("Введите 1 число:", 5);
let b = +prompt("Введите 2 число:", 4);
let c = +prompt("Введите 3 число:", 6);

let sum = a + b + c;
alert("Сумма чисел: " + sum); */

// let sum = +prompt("Введите 1 число:", 5);
// sum += +prompt("Введите 2 число:", 4);
// sum += +prompt("Введите 3 число:", 6);

// alert("Сумма чисел: " + sum);

// 7 > 3 ? alert("7") : alert("3");
// 3 > 7 ? alert("7") : alert("3");

// let age = prompt("Введите возраст");
// age >= 18 ? alert("Совершеннолетний") : alert("Несовершеннолетний");

// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// // ch == num ? alert("Угадали!") : alert("Не угадали!");
// ch == num ? alert("Угадали!") : ch < num ? alert("Загаданное число больше") : alert("Загаданное число меньше");

// let temp = prompt("Введите температуру");
// let res = temp > 30 ? "Очень жарко" 
// : temp > 20 ? "Тепло"
// : temp > 10 ? "Прохладно"
// : temp > 0 ? "Холодно"
// : "Очень холодно";

// alert(res);

/* 
if(условие){
    истина
} else {
    ложь
}
*/

// let a = 12;
// let b = 0;

// if (b != 0) {
//     let res = a / b;
//     alert("Результат: " + res);
// } else {
//     alert("Делить на \"0\" нельзя");
// }

// let value = prompt("Введите число: ", 5);

// if (value % 2){  // value % 2 == 1  // value % 2 != 0
//     alert("Число нечетное");
// } else {
//     alert("Число четное");
// }

// let a = null;
// console.log(a);


// if(a){
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// let a = 16;
// let b = 16;
// if (a > b) {
//     alert(a + " > " + b);
// }
// if (a < b) {
//     alert(a + " < " + b);
// }
// if (a == b) {
//     alert(a + " == " + b);
// }

// let a = 16;
// let b = 16;
// if (a > b) {
//     alert(a + " > " + b);
// } else if (a < b) {
//     alert(a + " < " + b);
// } else {
//     alert(a + " == " + b);
// }

// let day = prompt("Введите день недели (цифрами):");
// if (day == 1){
//     alert("День недели - ");
//     alert("понедельник");
// } else if (day == 2){
//     alert("День недели - вторник");
// } else if (day == 3){
//     alert("День недели - среда");
// } else if (day == 4){
//     alert("День недели - четверг");
// } else if (day == 5){
//     alert("День недели - пятница");
// } else if (day == 6){
//     alert("День недели - суббота");
// } else if (day == 7){
//     alert("День недели - воскресенье");
// } else {
//     alert("Такого дня недели не существует");
//     alert("Конец задачи");
// }


// let login = prompt("Введите логин:", "admin");
// if (login) {
//     if (login == "admin") {
//         let psw = prompt("Введите пароль:", "password");
//         if (psw) {
//             if (psw == "password") {
//                 alert("Добро пожаловать");
//             } else {
//                 alert("Пароль неверен");
//             }
//         } else {
//             alert("Вход отменен");
//         }
//     } else {
//         alert("Я вас не знаю");
//     }
// } else {
//     alert("Вход отменен");
// }

// if(5 == 5 && 5 > 2){ // true && true
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// if(5 == 2 && 5 > 2){ // false && true
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// if(5 == 5 && 5 > 7){ //  true && false 
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }


// if(5 == 2 && 5 > 7){ //  false && false 
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// if(5 == 5 || 5 > 2){ // true || true
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// if(5 == 2 || 5 > 2){ // false || true
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// if(5 == 5 || 5 > 7){ //  true || false 
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }


// if(5 == 2 || 5 > 7){ //  false || false 
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }


// let age = prompt("Введите возраст");
// if(age > 17 && age < 70){
//     alert("Вы можете получать права");
// } else {
//     alert("Права не давать");
// }

// let age = prompt("Введите возраст");
// if(age < 18 || age > 69){
//     alert("Права не давать");
// } else {
//     alert("Вы можете получать права");
// }

// console.log(!true);
// console.log(!false);
// console.log(!!0);
// console.log(!!"Hello");

// let trg1 = prompt('Введите первую сторону: ', 10);
// let trg2 = prompt('Введите вторую сторону: ', 20);
// let trg3 = prompt('Введите третью сторону: ', 30);
 
// if(trg1 === trg2 && trg2 === trg3) {
//   console.log('Треугольник равносторонний');
// } else if (trg1 === trg2 || trg2 === trg3 || trg3 === trg1) {
//   console.log('Треугольник равнобедренный');
// } else {
//   console.log('Треугольник разносторонний');
// }

// let ch = prompt("Введите количество ворон", 5);

// if(ch >= 0 && ch <= 9){
//     if(ch == 1){
//         alert(`На ветке ${ch} ворона`);
//     } else if(ch >= 2 && ch <= 4){
//        alert(`На ветке ${ch} вороны`); 
//     } else {
//         alert(`На ветке ${ch} ворон`);
//     }
// } else {
//     alert("Непустимое значение");
// }

let ch = prompt("Введите количество ворон", 5);

if(ch >= 0 && ch <= 9){
    if(ch == 1){
        alert(`На ветке ${ch} ворона`);
    } 
    if(ch >= 2 && ch <= 4){
       alert(`На ветке ${ch} вороны`); 
    } 
    if(ch >= 5 && ch <= 9 || ch == 0) {
        alert(`На ветке ${ch} ворон`);
    }
} else {
    alert("Непустимое значение");
}