// const userInput = prompt("type number");

// /**
//  *
//  * @param {number} val - integer
//  * @returns {string, number}
//  */
// const isInputNumber = function (val) {
//   if (val === "" || val === null || val === " " || Number.isNaN(Number(val))) {
//     return "it's not number";
//   }
//   {
//     return val;
//   }
// };

// // const isNumOdd = function(val) {
// //   if (val % 2 === 1) {
// //     return 'odd';
// //   }
// //   {
// //     return 'even'
// //   }
// // }

// /**
//  *
//  * @param {number} val - integer
//  * @returns {string}
//  */
// const isNumOddOrEven = function (val) {
//   if (val % 2 === 0) {
//     return "even";
//   }
//   if (val % 2 === 1) {
//     return "odd";
//   }
//   {
//     return "it's not number";
//   }
// };
// console.log(isNumOddOrEven(isInputNumber(userInput)));
// console.log(isInputNumber(userInput));
// console.log(isNumOdd(isInputNumber(userInput)));

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

// Значення для перевірки функції вводимо без користувача.

const value1 = "1234";
const value2 = "123";

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {boolean}
 */
const checkTypeofArg = function (arg1, arg2) {
  return typeof arg1 === typeof arg2;
};

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {boolean}
 */
const isBigger = function (arg1, arg2) {
  return arg1 > arg2;
};

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {boolean}
 */
const isSmaller = function (arg1, arg2) {
  return arg1 < arg2;
};

/**
 *
 * @param {any} arg1
 * @param {any} arg2
 * @returns {*}
 */
const isArgsTheSameType = function (arg1, arg2) {
  if (checkTypeofArg(arg1, arg2) && isBigger(arg1, arg2)) {
    return arg1;
  }
  if (checkTypeofArg(arg1, arg2) && isSmaller(arg1, arg2)) {
    return arg2;
  }
  {
    return null;
  }
};

console.log(isArgsTheSameType(value1, value2));
