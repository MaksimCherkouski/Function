//************* 1 Task ************/
// function calcA(a) {
//   let i = 0;
//   while (a > 10) {
//     a = a / 2;
//     i++;
//   }
//   return i;
// }
// console.log(calcA(100));

// ************ 2 Task ************/
// function userNumber() {
//   let a = prompt("Введите число от 1 до 10");
//   while (isNaN(Number(a)) || a > 10 || a < 1) {
//     a = prompt("число не корректно, введите еще раз");
//   }
//   return a;
// }

// function getRandomNumber() {
//   return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// }

// function areNumbersEqua(a, b) {
//   if (a == b) {
//     alert("Вы угадали число");
//   } else {
//     alert("Вы не угадали число");
//   }
// }
// areNumbersEqua(userNumber(), getRandomNumber());
//************* 3 Task *************/
// function getLine(str) {
//   let a = str.split(" ");

//   for (let i = 0; i < a.length; i++) {
//     let letter = a[i];
//     let letter2 = letter[0].toUpperCase() + letter.slice(1);
//     // console.log(letter2);
//     a[i] = letter2;
//   }
//   a = a.join(" ");
//   return a;
// }
// console.log(getLine("hello word minsk"));

//*************** 4 Task ************/
// function calkSum() {
//   let result = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }
// console.log(calkSum(2, 3, 5, 1));

//*************** 5 Task ***********/
// function calkSum(a) {
//   let c = String(a);
//   let result = 0;
//   for (i = 0; i < c.length; i++) {
//     result += Number(c[i]);
//   }
//   return result;
// }
// console.log(calkSum(2222));

//**************** 6 Task **********/

// function getLine(str) {
//   let a = str.split(" ");

//   for (let i = 0; i < a.length; i++) {
//     let c = a[i].toLowerCase();
//     a[i] = c;
//   }
//   a = a.join("-");
//   return a;
// }
// console.log(getLine("Hello Word"));

//**************** 7 Task *************/
// function getLine(str) {
//   let a = str.split(" ");

//   for (let i = 0; i < a.length; i++) {
//     let letter = a[i];
//     let letter2 = letter[0].toUpperCase();
//     // console.log(letter2);
//     a[i] = letter2;
//   }
//   a = a.join("");
//   return a;
// }
// console.log(getLine("Минск"));
