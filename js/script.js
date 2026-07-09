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

// let ch = prompt("Введите количество ворон", 5);

// if(ch >= 0 && ch <= 9){
//     if(ch == 1){
//         alert(`На ветке ${ch} ворона`);
//     }
//     if(ch >= 2 && ch <= 4){
//        alert(`На ветке ${ch} вороны`);
//     }
//     if(ch >= 5 && ch <= 9 || ch == 0) {
//         alert(`На ветке ${ch} ворон`);
//     }
// } else {
//     alert("Непустимое значение");
// }

/*
switch(условие){
    case значение_1:
        код;
    break;
    case значение_2:
        код;
    break;
    default:
        код;
}
*/

// let a = +prompt("Введите число:");
// switch (a) {  // a === 1
//     case 1:
//         alert("Код 1");
//         break;
//     case 2:
//         alert("Код 2");
//         break;
//     case 3:
//         alert("Код 3");
//         break;
//     default:
//         alert("Я таких значений не знаю");
// }

// let a = +prompt("Введите результат '2 + 2':");
// switch (a) {
//     case 4:
//         alert("Верно");
//         break;
//     case 3:
//     case 5:
//         alert("Не верно");
//         break;
//     default:
//         alert("Я таких значений не знаю");
// }

// let day = "четверг234";

// switch(day){
//     case "суббота":
//     case "восресенье":
//         alert("Это выходной день");
//         break;
//     case "понедельник":
//     case "вторник":
//     case "среда":
//     case "четверг":
//     case "пятница":
//         alert("Это рабочий день");
//         break;
//     default:
//         alert("Такого дня недели не существует");
// }

// let m = +prompt("Введите номер месяца:");
// let n;
// switch(m){
//     case 1: n = "январь"; break;
//     case 2: n = "февраль"; break;
//     case 3: n = "март"; break;
//     case 4: n = "апрель"; break;
//     case 5: n = "май"; break;
//     case 6: n = "июнь"; break;
//     case 7: n = "июль"; break;
//     case 8: n = "август"; break;
//     case 9: n = "сентябть"; break;
//     case 10: n = "октябрь"; break;
//     case 11: n = "ноябрь"; break;
//     case 12: n = "декабрь"; break;
//     default: n = "Неправильный номер месяца";
// }

// alert("Вы ввели: " + n);

// document.writeln("<p>Текст выведен <b>в окно браузера</b></p>");
// document.writeln("<p><img src='1.jpg'></p>");

// Цикл - конструкция повторения

/*
do...while(цикл с постусловием)
do{
    тело цикла
} while(условие);
*/

// let i = 0;  // 5
// do{
//     document.writeln("Это номер: " + i + "<br>");
//     i++;
// } while(i < 5);  // 10 < 5

// итерация - один шаг цикла

// let i = 5;  // переменная счетчик
// do{
//     document.writeln("Это номер: " + i + "<br>");
//     i--;
// } while(i > 0);  //

// let i = 0;  // переменная счетчик
// do{
//     document.writeln("Это номер: " + i + "<br>");
//     i += 5;  // i = i + 5;
// } while(i < 25);

// let i = -1;
// do {
//     document.writeln("Квадрат " + ++i + " равен " + i ** 2 + "<br>");
//     // i++;
// } while (i < 7);

/* while(цикл с предусловием)
while(условие){
    тело цикла;
}
*/

// let i=0;
// while(i<5){
//     document.writeln("Это номер: " + i + "<br>");
//     i++;
// }

// Написать программу, выводящую на экран целые числа от 1 до 30, за исключением чисел кратных трем.

// let i = 1;
// while(i <= 30){
//     if(i % 3 != 0){
//         document.writeln(i + " ");
//     }
//     i++;
// }

// Написать программу, вычисляющую сумму чисел в заданном диапазоне (Например: 5 и 10. Результат: 5+6+7+8+9+10=45).

// let start = 5;
// let end = 10;
// let i = start;  // 5
// let sum = 0;
// while(i <= end){
//     sum += i;  // sum = 5 + 6
//     i++;
// }
// document.writeln(sum);

// let start = +prompt("Введите 1 число: ");
// let end = +prompt("Введите 2 число: ");

// let sum = 0;
// while(start <= end){
//     sum += start;
//     start++;
// }
// document.writeln(sum);

// let i = 3;  // 0
// while(i){  // false
//     document.writeln(i + "<br>");
//     i--;
// }
// let num, pr = 1;
// do {
//     num = prompt("Введите число: ", 10);
//     if(num == 0){
//         break;
//     }
//     pr *= num;
// } while(true);
// alert("Произведение: " + pr);

// let i = 0;  // 3
// while (i < 10) {
//     if(i == 3){
//         i++;
//         continue;
//     }
//     if(i == 6){
//         break;
//     }
//     document.writeln("Это номер: " + i + "<br>");
//     i++;
// }

/* for (цикл со счетчиком) 
for(инициализация_переменной;условие;измение_переменной){
    тело цикла
}
*/

// for(let i = 0; i < 5; i++){
//     document.writeln("Это номер: " + i + "<br>");
// }


// let i = 0;  
// do{
//     document.writeln("Это номер: " + i + "<br>");
//     i++;
// } while(i < 5);  

// for(let i = 0; i < 12; i++){
//     if(i == 3){
//         continue;
//     }
//     if(i == 6){
//         break;
//     }
//     document.writeln("Это номер: " + i + "<br>");
// }

// let n = prompt("n =");  // "3"
// let sum = 0;
// let count = 0;

// for (let i = 0; i < n; i++) {
//     let num = +prompt("-> ", 10);   
//     sum += num;
//     if(num != 0){
//         count++;
//     }
// }

// document.writeln(sum / count);
// let i = 0;
// for (; ;) {
//     if (i == 7) {
//         break;
//     }
//     document.writeln(i + "<br>");
//     i++;
// }

// for (let i = 0; i < 5; i++){
//     document.writeln(i + "<br>");
// }

// document.writeln("i = " + i);
// let b = 20;
// let a = 5;
// if(a == 5){
//     let b = 10;   
//     console.log("inner b = " + b);
// } 
// console.log(b);

// Найти сумму целых положительных чисел больших 5, меньших 30 и кратных 3.

// let sum = 0;
// for(let i=5; i<=30; i++){
//     if(i % 3 == 0){
//         sum += i;
//         console.log(i);
//     }     
// }
// document.writeln(sum);


// let count = prompt("Укажите количество звездочек");  // 5
// for(let i = 0; i < count; i++){  // 5 < 5
//     document.writeln("*<br>");
// }

// for (let i = 0; i < 4; i++) {  // 2
//     document.writeln("+++ "+ i +"<br>");
//     for(let j = 0; j < 2; j++){  // 0
//         document.writeln("---------- " + j + "<br>");        
//     }
// }
// let tr = prompt("Введите количество строк");
// let td = prompt("Введите количество столбцов");
// let symbol = prompt("Введите символ");
// document.writeln("<table border='1' style='color: red'>");
// for (let i = 0; i < tr; i++) {
//     document.writeln("<tr>");
//     for (let j = 0; j < td; j++) {
//         document.writeln("<td>" + symbol + "</td>");
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr>");
//     for (let j = 1; j < 11; j++) {
//         if(j % 2 == 0){
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//              document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }       
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// Массив
// let x = 5;
// let y = 2;
// let z = 8;

// let coords = [5, 2, 8];

// console.log(coords);
// console.log(coords[1]);
// console.log(coords[2]);
// console.log(coords[0]);

// let arr1 = new Array(2,6,8);
// console.log(arr1);

// let arr2 = [2, 6, 8];
// console.log(arr2);


// let arr1 = new Array(5);
// console.log(arr1);

// let arr2 = [5];
// console.log(arr2);


// let arr = [1, 2, 3, 4, 5, 6];
// document.writeln(arr);
// console.log(arr);
// console.log(arr.length);
// arr.length = 3;
// console.log(arr);

// arr.length = 6;
// console.log(arr);

// arr.length = 0;
// console.log(arr);

// let arr = [5, 9, -3, -1, 4, -8, 7, 2, 6];
// for(let i = 0; i < arr.length; i++){
//     document.writeln(arr[i] ** 2 + "<br>");    
// }

// let arr = [5, 9, -3, -1, 4, -8, 7, 2, 6];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         arr[i] = arr[i] * -1;
//     }
//     document.writeln(arr[i] + "<br>");    
// }

// Посчитать в массиве сумму всех отрицательных элементов

// let a = 0
// let arr = [5, 9, -3, -1, 4, -8, 7, 2, 6];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         a += arr[i]; // a = a + arr[i];
//     }
//     // document.writeln(arr[i]);
// }
// alert(a)

// let arr = new Array();
// arr[0] = 15;
// arr[1] = 6;
// arr[2] = 9;
// arr[3] = 4;
// console.log(arr);

// arr[10] = 59;
// console.log(arr);

// console.log(arr[5]);
// console.log(arr[20]);

// let mas = new Array(5);
// for (let i = 0; i < mas.length; i++) {
//     mas[i] = prompt("Введите " + (i + 1) + " элемент массива");
// }
// console.log(mas);
// for (let i = mas.length - 1; i >= 0; i--) {
//     document.writeln(mas[i] + " ");
// }

// let n = prompt("Введите количество элементов массива");
// let mas = [];
// for (let i = 0; i < n; i++) {
//     if (n > 5) {
//         mas[i] = 0;
//     } else {
//         mas[i] = +prompt("-> ");
//     }
// }
// for (let i = 0; i < mas.length; i++) {
//     document.writeln(mas[i] + " ");
// }

// let arr = [2, 4, 5, "Игорь", 1.5, true];
// console.log(arr);

// let mas = [[2,1,1], [6,3,7], [8,5,6]];
// // console.log(mas.length);
// // console.log(mas[1][2]);
// // console.table(mas);

// // document.writeln(mas);

// for(let i = 0; i < mas.length; i++){
//    for(let j = 0; j < mas[i].length; j++){
//     document.writeln(mas[i][j] + "&nbsp;");    
//    }
//    document.writeln("<br>");   
// }

// let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой", "2 x 2 будет 8?", "Дельфин - это рыба?", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];

// let correctAnswers = [false, true, false, false, false, false, false];

// let res = new Array();
// let sum = 0;

// for (let i = 0; i < questions.length; i++) {
//     let answer = confirm(questions[i]);
//     if (answer == correctAnswers[i]) {
//         res[i] = 10;
//         sum += res[i];
//     } else {
//         res[i] = 0;
//     }
// }

// console.log(res);
// console.log(sum);

// document.writeln("<table border='1' width='500'>");

// document.writeln("<tr>");
// document.writeln("<th>Вопрос</th>");
// document.writeln("<th>Баллы</th>");
// document.writeln("</tr>");

// for(let i=0; i<questions.length; i++){
//     document.writeln("<tr>");
//     document.writeln("<td>" + questions[i] + "</td>");
//     document.writeln("<td>" + res[i] + "</td>");    
//     document.writeln("</tr>");    
// }

// document.writeln("<tr>");
// document.writeln("<th>Итого</th>");
// document.writeln("<th>" + sum + "</th>");
// document.writeln("</tr>");

// document.writeln("</table>");


// let arr = [1, 2, 3, 4, 5];

// for(let elem of arr){
//     console.log(elem ** 2);    
// }

/* let text1 = document.getElementById("text_1");
console.log(text1);
console.log(text1.textContent);

text1.textContent = "Новое <b>содержимое</b>";

let text2 = document.getElementById("text_2");
text2.innerHTML = "Новое содержимое с <b>html разметкой</b>"; */

// let res = +prompt("Выбери изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
// document.writeln("<div id='image'></div>");
// let img = document.getElementById("image");

// switch (res) {
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>";
//         break;
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpeg'>";
//         break;
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//         break;
//     default:
//         alert("Такого изображения нет");
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";

// // list-style-type => listStyleType

// tag.style.background = "silver";
// tag.style.padding = "10px 20px";

// tag.id = "test";
// tag.className = "x";

// let cl = document.getElementsByClassName("a");
// console.log(cl);
// cl[0].style.color = "red";
// cl[1].style.color = "blue";

/* document.querySelector("css")
document.querySelectorAll("css") */

// let el = document.querySelector("h2");
// el.style.background = "yellow";
// console.log(el);

// // let els = document.querySelectorAll("h2");
// // console.log(els[1]);

// let els = document.querySelectorAll("#purp");
// console.log(els);
// els[0].style.background = "yellow";

// let lists = document.querySelectorAll("li");
// // console.log(lists);
// // console.log(lists.length);

// for(let i=0; i < lists.length; i++){
//     lists[i].innerHTML += "!!!";
// }

// let purple = document.querySelectorAll(".purple li");
// console.log(purple);
// for(let i=0; i<purple.length; i++){
//     purple[i].style.color = "purple";
// }

// let title = document.querySelector("h1 + h2");
// title.style.color = "red";

// // let m = document.querySelectorAll(".red li")[1];
// let m = document.getElementsByClassName("red")[0].getElementsByTagName("li")[1];
// m.style.background = "orange";

// let el = document.querySelector(".elem");

// // console.log(el.closest(".content"));
// console.log(el.closest(".container"));
// console.log(el.closest("h1"));


// document.writeln("<div id='divSample'></div>");
// // let div = document.querySelector("#divSample");
// let div = document.getElementById("divSample");
// console.log(div);

// div.textContent = "Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С \
// некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно \
// целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым \
// отверстием), измеренным в миллиметрах.";

// div.style.background = "#f0f";
// div.style.color = "#99ffff";
// div.style.width = "50%";
// div.style.outline = "10px dotted #000";
// div.className = "resetFont";

// let cl = document.querySelector(".resetFont");
// cl.style.fontSize = "12pt";
// cl.style.fontWeight = "bold";
// cl.style.textDecoration = "line-through";

// let title = document.querySelector("h1");
// console.log(title);

// title.style.color = "red";


/* let js = ["нужно", "учить", "JavaScript"];
document.writeln(js);

console.log(js);
console.log(js.pop());
console.log(js);

js.push("JavaScript", "!");
console.log(js);

console.log(js.shift());
console.log(js);

js.unshift("почему", "нужно");
console.log(js);

let arr = js.slice(1, 3);
console.log(arr);

console.log(js.slice(1));
console.log(js);

// console.log(js.toSpliced(1, 2));

// delete js[1];
// console.log(js);

js.splice(1, 1);
console.log(js);

js.splice(0, 2, "Мы", "изучаем");
console.log(js);

js.splice(2, 0, "сложный", "язык");
console.log(js);

js.splice(-2, 0, "но", "очень", "интересный");
console.log(js);

let index = js.indexOf("сложный");
console.log(index);


js.push("сложный");
console.log(js);

// let index1 = js.indexOf("сложный");
// console.log(index1);

// let index2 = js.lastIndexOf("сложный");
// console.log(index2);

// let isValue = js.includes("интересный1");
// console.log(isValue);

// let strings = [7, 4, 1, 4, 7, 4, 1, 4, 7, 7, 1, 4];
// let res = [];  // [7, 4, 1]

// for(let str of strings){  // 7
//     if(!res.includes(str)){
//         res.push(str);
//     }    
// }

// console.log(res);

// let str = js.join(" & ");
// console.log(str);

js.reverse();
console.log(js); */


// let people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
// console.log(people);
// let arr = people.flat(2);
// console.log(arr);

// let a = [1, 2];
// let b = a.concat(3, 4);  // [1, 2, 3, 4]
// console.log(b);
// let c = ['a', 'b', 'c'];
// let num = a.concat(b, c);
// console.log(num);

// let users = ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"];
// console.log(users.sort());

// let n = [1, 5, 15, 2];
// n.sort((a, b) => a - b);
// console.log(n);


// Функции

// Fuction Declaration (объявление функции)
/* 
function имя(аргументы){
    тело функции
}
*/

// function hello(name){  // аргумент 
//     document.writeln("Hello, " + name + " <br>");
// }

// hello();
// hello("Irina");  // параметр


// function test(a, b, c){
//     let sum = a + b + c;
//     console.log("Сумма:");
//     return sum;   
// }

// let n1 = 10, n2 = 20, n3 = 30; 
// let res = test(n1,n2,n3);

// // let m1 = 1, m2 = 2, m3 = 3;
// // test(m1,m2,m3);
// console.log(res);


// function test2(n, m){
//     if(m == 0){
//         return "На 0 делить нельзя";
//     }
//     return n / m;
// }

// // function test2(n, m){
// //     if(m == 0){
// //         return "На 0 делить нельзя";
// //     } else {
// //         return n / m;
// //     }    
// // }

// let a = test2(10, 2);
// console.log(a);

// let b = test2(10, 0);
// console.log(b);


// Попросим пользователя ввести два числа. Если первое число больше второго числа, то найти разность этих чисел. Если второе число больше первого, то найти сумму этих чисел.

// function result(n, m){  //  10, 5
//     if(n > m){
//         return n - m;
//     } else {
//         return n + m;
//     }
// }

// let a = +prompt("Введите первое число:");
// let b = +prompt("Введите второе число:");
// let res = result(a, b);
// alert(res);

// Создать функцию для вычесления суммы элементов массива
// function sum(arr){
//     let res = 0;
//     for(let i=0; i < arr.length; i++){
//         res += arr[i];
//     }
//     return res;
// }

// document.writeln(sum([3,8,9,4,1,2,5]) + "<br>");
// document.writeln(sum([1,2,5]) + "<br>");


//Создать функцию для нахождения большего из двух чисел, учитывая, что числа могут быть равны

// function max(n, m){
//     if(n > m){
//         document.writeln("Большее число: " + n + "<br>");        
//     }
//     if(m > n){
//         document.writeln("Большее число: " + m + "<br>");      
//     }
//     if(n == m){
//         document.writeln("Числа равны");        
//     }
// }

// max(5, 2);
// max(2, 5);
// max(5, 5);

// function showArrayContent(arrayToShow) {
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     } else {
//         let last = arrayToShow.pop();
//         let str = arrayToShow.join(", ");
//         let res = str + " и " + last;
//         return res;
//     }
// }
// // Определяем массивы.
// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лето', 'осень');
// // alert(showArrayContent(a)); // Выводим содержимое массивов,
// alert(showArrayContent(b)); // используя созданную выше функцию.
// alert(showArrayContent(c));


// Function Expression (функциональное выражение)

/* 
let имя = function(аргументы){
    тело функции
}
*/
// console.log(sum1(2, 3));

// function sum1(a, b){
//     return a + b;
// }


// let sum2 = function(a, b){
//     return a + b;
// }

// console.log(sum2(20, 30));

// Дан массив целых чисел. Определить среднее арифметическое этих чисел используя функцию

// let average = function (arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return (sum / arr.length).toFixed(2);
// }

// document.writeln(average([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(average([8, 2, 4]) + "<br>");


// Написать функцию нахождения максимального числа из массива

// let max = function(arr){  // [2, 8, 4]
//     let mx = arr[0];  // 2
//     for(let i = 1; i < arr.length; i++){
//         if(mx < arr[i]){  // 8 < 4
//             mx = arr[i];  // 8
//         }
//     }
//     return mx;
// }

// document.writeln(max([2, 8, 4]) + "<br>");
// document.writeln(max([3, 8, 9, 4, 1, 2, 5]) + "<br>");

// IIFE (самовызывающаяся функция)

// (function(){
//     alert("Hello");
// }());

// (function(n){
//     alert(n*n);
// })(4);


// Arrow Function (стрелочная функция)

// function test(a, b, c) {
//     let res = a + b + c;
//     return res;
// }

// alert(test(10, 20, 30));

// let test2 = (a, b, c) => a + b + c;

// alert(test2(1, 2, 3));

// let test3 = (a, b, c) => {
//     let res = a + b + c;
//     return res;
// }

// alert(test3(100, 200, 300));

// let hello = () => alert("Hello");

// hello();

// let hello = name => alert("Hello, " + name);
// hello("Irina");

// let change = lst => {
//     let last = lst.pop();
//     let first = lst.shift();
//     lst.push(first);
//     lst.unshift(last);
//     return lst;
// }

// let change = lst => {
//     let temp = lst[lst.length - 1]; // 3
//     lst[lst.length - 1] = lst[0];  // 1
//     lst[0] = temp;  // 3

//     // [lst[0], lst[lst.length - 1]] = [lst[lst.length - 1], lst[0]];
//     return lst;
// }

// document.writeln(change([1, 2, 3]) + "<br>");
// document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// document.writeln(change(["с", "л", "о", "н"]) + "<br>");

// let a = 5;
// let b = 3;
// console.log("a:", a);
// console.log("b:", b);

// // let c = a; // c = 5
// // a = b;  // a = 3
// // b = c;  // b = 5

// [a, b] = [b, a];

// console.log("a:", a);
// console.log("b:", b);


// let change = lst => {
//     [lst[0], lst[lst.length - 1]] = [lst[lst.length - 1], lst[0]];
//     return lst;
// }

// document.writeln(change([1, 2, 3]) + "<br>");
// document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// document.writeln(change(["с", "л", "о", "н"]) + "<br>");

// let test = (x, y) => x > y ? true : false;

// console.log(test(10, 5));
// console.log(test(5, 10));

// if(test(5, 10)){
//     console.log("Первое число больше второго");    
// } else {
//     console.log("Второе число больше первого");    
// }

// let checkPassword = password => {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;

//     for(let ch of password){
//         if("A" <= ch && ch <= "Z"){  
//             hasUpper = true;
//         }
//         if("a" <= ch && ch <= "z"){
//             hasLower = true;
//         }
//         if("0" <= ch && ch <= "9"){
//             hasNum = true;
//         }
//     }

//     if(password.length >= 8 && hasUpper && hasLower && hasNum){
//         return true;
//     }
//     return false;
// }

// let psw = prompt("Введите пароль:");
// if(checkPassword(psw)){
//     document.writeln("Это надежный пароль");    
// } else {
//     document.writeln("Это ненадежный пароль");    
// }

// function getNames(){
//     let firstName = "Irina";
//     let lastName = "Vetrova";
//     return [firstName, lastName];
// }

// let names = getNames();
// console.log(names);
// // let surname = names[1];
// // console.log(surname);
// let [name1, surname] = getNames();  // деструктуризация
// console.log(name1, surname);

// Функция обратного вызова (коллбек функция)

// function isOdd(number){
//     return number % 2;
// }

// function isEven(number){
//     return number % 2 == 0;
// }

// function filter(numbers, fn) {
//     let results = [];
//     for(let number of numbers){
//         if(fn(number)){
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(num, isOdd));
// console.log(filter(num, isEven));


// function filter(numbers, fn) {
//     let results = [];
//     for(let number of numbers){
//         if(fn(number)){
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];

// let isOdd = filter(num, function(number){
//     return number % 2;
// });

// let isEven = filter(num, number => number % 2 == 0);

// console.log(isOdd);
// console.log(isEven);


// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function(n){
//     document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>");    
// });
// document.writeln("<br>");

// numbers.forEach(n => document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>"));

// ["Hello", "World"].forEach(alert);
// ["Hello", "World"].forEach((item, index, array) => {
//     alert(`У ${item} индекс ${index} в ${array}`);
// });

// let numbers = [1, 2, 3, 4, 5, 6];

// let squares = numbers.map(n => n * n);
// console.log(squares);

// console.log(["Hello", "World", "!"].map(item => item.length));


// let numbers = [1, -12, 8, -4, 25, 48];
// let passed = numbers.filter(n => n > 0);
// console.log(passed);

// document.writeln(Math.floor(7.9) + "</br>");
// document.writeln(Math.ceil(7.1) + "</br>");
// document.writeln(Math.round(7.4) + "</br>");

// (function (min, max) {
//     document.writeln(Math.floor(Math.random() * (max - min) + min) + "<br>");  // 7 + 2
// })(2, 9);
// // от 2 до 9 (не включительно)

// document.writeln(Math.floor(Math.random() * 9) + "<br>");  // от 0 до 9 (не включительно)

// document.writeln(Math.floor(Math.random() * 7 + 2) + "<br>");  // от 2 до 9 (не включительно)

// document.writeln(Math.floor(Math.random() * 10 + 5) + "<br>");  // от 5 до 15 (не включительно)

// let randMas = function(arr){
//     // return arr[Math.floor(Math.random() * arr.length)];
//     return arr[parseInt(Math.random() * arr.length)];
// }

// let mas = ["Цикл", "Массив", "Условие", "Функция", "Переменная"];
// document.writeln(randMas(mas));


// console.log(Math.floor(8.9));
// console.log(parseInt(8.9));

// document.writeln("<div id='block'></div>");
// let id = document.getElementById("block");

// id.style.width = "100px";
// id.style.height = "100px";
// createColor();
// // id.style.background = "rgb(255,255,0)";

// function createColor(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);

//     // id.style.background = "rgb(" + r + "," + g + "," + b + ")";
//     id.style.background = `rgb(${r},${g},${b})`;
// }

// document.writeln("<div id='block'></div>");
// let id = document.getElementById("block");

// id.style.width = "100px";
// id.style.height = "100px";
// // id.style.background = "rgb("+ createColor() +","+ createColor() +"," + createColor() + ")";
// id.style.background = `rgb(${createColor()},${createColor()},${createColor()})`;

// function createColor(){    
//     return Math.floor(Math.random() * 256);
// }

// function fn(a, b, ...args) {
//     console.log("a =", a, "b =", b, "args =", args);
// }

// fn(1, 2, 3, "A", "B", "C");

// function sum(...args) {
//     let total = 0;
//     for(let a of args){
//         total += a;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(5, 7, 9, 8, 2, 3));

// function hello(name){
//     name = name || "незнакомец";
//     document.writeln("Привет, " + name + "!<br>");    
// }

// hello("Сергей");
// hello();

// function hello(name = "незнакомец") {
//     document.writeln("Привет, " + name + "!<br>");
// }

// hello("Сергей");
// hello();

// function rect(w=300, h=20, fon="green"){
//     document.writeln("<div id='shape'></div>");
//     let shape = document.getElementById("shape");

//     shape.style.width = w + "px";
//     shape.style.height = h + "px";
//     shape.style.background = fon;
// }

// // rect(150, 50, "gold");
// rect(150, 50);
// rect(150);

// let a = 5;  // глобальная переменная

// if(a > 0){
//     a = 2; // локальная переменная  
// }   

// console.log(a);

// let j = 2;

// function ch() {
//     j = 5;
// }

// ch();

// console.log(j); 

// Вложенные функции



// function func(num1, num2) {

//     function square(num) {
//         return num * num;
//     }

//     return square(num1) + square(num2);
// }

// console.log(func(2, 3));


// let num = 5;

// function test(){

//     function inner(){
//         console.log(num);        
//     }

//     inner();
// }

// test();

// function test(num1, num2){

//     function inner(){
//         console.log(num1 + num2);        
//     }
//     num1 = 2;
//     inner();
// }

// test(5,2);


// function test(num){

//     function inner(localNum){
//         console.log(localNum);  // 3     
//     }
//     inner(num + 2);  // 2
// }

// test(5);  // 1

// function func(){
//     return function(str){
//         return str;
//     }
// }

// console.log( func()("!") );


// function func(num1){
//     return function(num2){
//         return num1 + num2;
//     }
// }

// console.log( func(1)(2) );

// function func(num1){
//     return function(num2){
//         return function(num3){
//             return function(num4){
//                 return function(){
//                    return [num1, num2, num3, num4]; 
//                 }
//             }
//         }
//     }
// }


// console.log(func(2)(3)(4)(5)()); // [2,3,4,5]


// Замыкание

// function test(){
//     let num = 5;

//     return function(){
//         console.log(num);        
//     }
// }

// let func = test();
// // console.log(func);
// func();


// function outer(n){
//     return function(x){
//         return n + x;
//     }
// }

// let add5 = outer(5);
// console.log(add5(10));

// let add6 = outer(6);
// console.log(add6(10));


// function test(city){     
//     let num = 0;  // 3
//     return function(){   
//         num++;
//         console.log(city, num);        
//     }
// }

// let func1 = test("Москва");
// func1();  // 1
// func1();  // 2
// func1();  // 3

// let func2 = test("Сочи");
// func2();
// func2();

// func1();  // 4

// let str = "I\'m a JavaScript \"programmer\"";
// document.writeln(str + "<br>");
// document.writeln(str[2] + "<br>");
// str = str[2] + "y";
// document.writeln(str.length + "<br>");
// document.writeln(str[6] + "<br>");
// document.writeln(str.at(6) + "<br>");
// document.writeln(str.at(-3) + "<br>");

// for(let ch of str){
//     console.log(ch);    
// }

// document.writeln(str.toLowerCase() + "<br>");
// document.writeln(str.toUpperCase() + "<br>");


// let n = prompt("Введите имя", "иГоРь");
// alert(first(n));


// function first(str){
//     let newStr = str.at(0).toUpperCase();

//     for(let i=1; i<str.length; i++){
//         newStr += str.at(i).toLowerCase();
//     }
//     return newStr;
// }

// let message = "hello_";

// let message2 = "world";

// message = message.concat("&&&", message2, "text");
// console.log(message);

// let str1 = "Я учу JavaScript. Мне нравится JavaScript.";

// str = str.concat(". ", str1);
// document.writeln(str + "<br>");


// let message = "*";
// console.log(message.repeat(25));

// document.writeln(str.indexOf("JavaScript", 7));
// document.writeln(str.lastIndexOf("JavaScript"));

// document.writeln(str.includes("JavaScript", 7) + "<br>");

// console.log(str.split(" ", 3));
// console.log(str.split(". "));


// let st = str.split("JavaScript");
// let s = st.join("PHP");
// console.log(s);

// let text = s.replace("PHP", "JavaScript");
// console.log(text);

// let text1 = s.replaceAll("PHP", "JavaScript");
// console.log(text1);

// document.writeln(str.slice(0, 3) + "<br>");
// document.writeln(str.slice(-23, -10) + "<br>");
// document.writeln("!!!" + str.slice(3, 0) + "<br>");


// document.writeln(str.substring(0, 3) + "<br>");
// document.writeln(str.substring(-23) + "<br>");
// document.writeln(str.substring(3, 0) + "<br>");

// background-color  =>  backgroundColor
// list-style-type  =>  listStyleType

// let style = prompt("Введите свойство CSS", "background-color");
// alert(def(style));

// function def(str){
//     let arr = str.split("-");  // [background, color]

//     for(let i = 1; i < arr.length; i++){
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//         // arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
//     }

//     return arr.join("");
// }

// let hello = "    Hello world   ";
// console.log(">" + hello + "<");
// console.log(hello.length);
// let newHello = hello.trim();
// console.log(">" + newHello + "<");
// console.log(newHello.length);

// document.writeln(("hello" > "Hello") + "<br>");  // 104 > 72

// document.writeln("hello".codePointAt(0) + "<br>");
// document.writeln("Hello".codePointAt(0) + "<br>");

// document.writeln(String.fromCodePoint(104));

// let shortest = 7;
// let longest = 10;
// let minASCII = 33;
// let maxASCII = 126;

// function randomPassword(){
//     let randomLength = rand(shortest, longest);
//     let res = "";
//     let randomChar;
//     for(let i=0; i<randomLength; i++){
//         randomChar = String.fromCodePoint(rand(minASCII, maxASCII));
//         res += randomChar;
//     }

//     return res;
// }

// function rand(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// document.writeln("Ваш случайный пароль: " + randomPassword());

// function loadStr(){
//     alert("Страница была загружена");
// }

// let m = document.getElementById("mes");

// function over(){
//     m.style.color = "red";
// }

// function out(){
//     m.style.color = "yellow";
// }

// function change(){
//     let h2 = document.querySelector("h2");
//     h2.style.color = "blue";
// }

// function randomBg(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     document.body.style.background = `rgb(${r}, ${g}, ${b})`;
// }

// let newImg = document.querySelector("img");

// function on(){
//     newImg.src = "night.png";
// }

// function off(){
//     newImg.src = "day.png";
// }

// let but = document.getElementById("but");

// // but.onclick = function(){
// //     alert("Спасибо");
// // }


// but.onclick = hello;

// function hello(){
//     alert("Спасибо");
// }

// function change(id){
//     id.innerHTML = "Новый текст";
// }

// function setColor(a){
//     document.body.style.background = a.className;
// }


// let el = document.querySelector("#elem");

// // el.addEventListener("click", function(){
// //     el.innerHTML = "Новый текст";
// // });

// el.addEventListener("click", changeText);
// el.addEventListener("contextmenu", changeColor);

// function changeText(){
//     el.innerHTML = "Новый текст";
// }

// function changeColor(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// }

// let but = document.querySelector("button");

// but.addEventListener("click", function(event){
//     console.log(event);    
// });



// let button = document.querySelectorAll("input");

// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener("click", handleClick);
// }

// function handleClick(event){
//     console.log("Клинкули по:", event.target.value);

// }

// document.addEventListener("mousemove", function(event){
//     let c = document.querySelector("#ev");
//     let x = event.clientX;
//     let y = event.clientY;
//     c.textContent = "X = " + x + ", Y = " + y;

//     c.addEventListener("dblclick", function(event){
//         event.target.style.background = "red";
//     })
// });

// let section = document.querySelector("section");
// let div = document.querySelector("div");
// let p = document.querySelector("p");

// section.addEventListener("click", function(){
//     section.style.background = "red";
// });

// div.addEventListener("click", function(event){
//     div.style.background = "orange";
//     event.stopPropagation();
// });

// p.addEventListener("click", function(){
//     p.style.background = "yellow";
// });


// let link = document.querySelector("a");

// link.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("Переход по ссылке отменен");    
// })

// let input = document.querySelector("#but");
// input.addEventListener("click", handler);

// function handler(){
//     alert("Спасибо");
//     input.removeEventListener("click", handler);
// }

// setTimeout(функция, задержка);

// setTimeout("alert('Текст')", 3000);
// setTimeout(hello, 3000);
// // setTimeout("hello()", 3000);

// function hello(){
//     alert('Текст');
// }

// setTimeout('hello("Привет", "друг")', 3000);
// setTimeout(hello, 3000, "Привет", "друг");

// function hello(h, n){
//     alert(h + ", " + n + "!");
// }

// document.writeln("<div id='dt'>Создание анимированного текста</div>");

// let id = document.querySelector("#dt");
// let text = document.querySelector("#dt").innerHTML;
// // console.log(text);
// let i = 1;

// window.addEventListener("load", animText);

// function animText(){
//     id.innerHTML = text.substring(0,i);
//     i++;

//     if(i > text.length){
//         i = 0;
//     }
//     console.log(i);    

//     setTimeout(animText, 100);
// }

// let d = new Date();
// document.writeln(d.toDateString() + "<br>");
// document.writeln(d.getFullYear() + "<br>");  // 2026
// document.writeln(d.getMonth() + "<br>");  // 6, получаем месяц от 0 по 11
// document.writeln(d.getDate() + "<br>");
// document.writeln(d.getDay() + "<br>"); // 0 - воскресенье, 1 - понедельник, 6 - суббота

// console.log(new Date(2015, 6, 9, 19, 11, 20));
// console.log(new Date(2015, 6, 9, 19, 11, 20).getTime());
// console.log(new Date().getTime());


// Сегодня: 9 июля 2026 года, четверг

// let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
// let day = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

// let d = new Date();
// let fullDate = "Сегодня: " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " года, " + day[d.getDay()];
// document.writeln(fullDate);

// setInterval(функция, интервал);


// document.writeln("<input type='button' value='Start/Stop'>");
// document.querySelector("input").addEventListener("click", st);

// let run = 0;  // 1
// let act;
// function st() {
//     if (run == 0) {
//         act = setInterval(setColor, 1000);
//         run = 1;
//     } else {
//         clearInterval(act);
//         run = 0;
//     }
// }

// let run;  // undefind
// let act;
// function st() {
//     if (!run) {  // !false  => true
//         act = setInterval(setColor, 1000);
//     } else {
//         clearInterval(act);
//     }
//     run = !run;  // false
// }

// function setColor() {
//     let x = document.body;
//     x.style.background = x.style.background == "yellow" ? "orange" : "yellow";
// }

// document.writeln("<div id = 'text'>Текущее время</div>");

// window.addEventListener("load", () => setInterval(time, 1000));

// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     if(sec < 10){
//         sec = "0" + sec;
//     }
//     let tim = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = tim;
// }

// let link = document.querySelector("#cl");
// link.addEventListener("click", myMove);

// function myMove(){
//     // link.style.display = "none";
//     // link.style.opacity = "0";
//     // link.style.visibility = "hidden";
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 15);    
//     console.log(id);


//     function frame(){
//         if(pos == 350){
//             // link.style.display = "block";
//             // link.style.opacity = "1";
//             // link.style.visibility = "visible";
//             link.addEventListener("click", myMove);
//             clearInterval(id);
//         } else{
//             link.removeEventListener("click", myMove);
//             pos++;
//             elem.style.top = elem.style.left = pos + "px";
//         }
//     }  
// }

// console.log(document.image);
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.width = 200;
// // document.image.border = 1;
// document.image.src = "blue_star.png";


let array = new Array("2.jpg", "3.jpg", "4.jpg");

document.writeln("<input type='button' value='<' name='left'>");
document.writeln("<img src='" + array[0] + "' id='sl'>");
document.writeln("<input type='button' value='>' name='right'>");

// document.getElementsByName("right")[0].addEventListener("click", next);
console.log(document.right);

document.right.addEventListener("click", next);
document.getElementsByName("left")[0].addEventListener("click", prev);

let image = document.getElementById("sl");
let i = 0;

function next() {
    i++;
    if(i == array.length){
        i = 0;
    }
    image.src = array[i];
}

function prev(){
    i--;
    if(i < 0){
        i = array.length - 1;
    }
    image.src = array[i];
}