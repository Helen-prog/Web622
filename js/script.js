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

let tag = document.getElementsByTagName("p")[2];
console.log(tag);
tag.innerHTML = "Hello <u>tag</u>";
tag.style.color = "blue";
tag.style.fontWeight = "bold";

// list-style-type => listStyleType