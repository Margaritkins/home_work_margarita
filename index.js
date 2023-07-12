//improve task with seasons
// const userMonth = prompt("type month number");

// const wichSeason = function(num) {
//   switch (num) {
//     case "1":
//     case "2":
//     case "12":
//       return("winter");
//     case "3":
//     case "4":
//     case "5":
//       return ("spring");
//     case "6":
//     case "7":
//     case "8":
//       return ("sumer");
//     case "9":
//     case "10":
//     case "11":
//       return ("fall");
//     default:
//       return ("error");
//   }
// };
// console.log(wichSeason(userMonth));


//home work condition (userAge)
// const userAge = prompt("type your age");

// const userAgeClass = function (num) {
//   if (
//     num < 0 ||
//     num > 150 ||
//     num === "" ||
//     num === " " ||
//     num === null ||
//     Number.isNaN(Number(num))
//   ) {
//     return "error";
//   // } else if (num >= 0 && num < 2) {
//   //   return "baby";
//   // } else if (num >= 2 && num <= 6) {
//   //   return "kinder";
//   // } else if (num >= 6 && num < 12) {
//   //   return "child";
//   // } else if (num >= 12 && num < 18) {
//   //   return "tinager";
//   // } else if (num >= 18 && num < 65) {
//   //   return "adult";
//   // } else if (num >= 65 && num < 100) {
//   //   return "old";
//   // } else if (num >= 100 && num <= 150) {
//   //   return "respect";
//   // }
// } else if (num < 2) {
//   return "baby";
// } else if (num <= 6) {
//   return "kinder";
// } else if (num < 12) {
//   return "child";
// } else if (num < 18) {
//   return "tinager";
// } else if (num < 65) {
//   return "adult";
// } else if (num < 100) {
//   return "old";
// } else if (num <= 150) {
//   return "respect";
// }
// };
// console.log(userAgeClass(userAge));

//calculator  I don't ynderstand how to do...
// const num1 = 2;
// const num2 = 3;
// const sign = '+'
// function isNum(val) {
//   return Number(val);

// }
// const calculator = function(arg1, arg2, arg3) {
// // if (Number.isNaN(Number(arg1)) || Number.isNaN(Number(arg2)) || arg3 !== '+' || arg3 !== '-' || arg3 !== '*' ||arg3 !== '/'){
// // return "error"
// // }
// // else 
// switch (isNum(arg1) & isNum(arg2)) {
//   case '+':
//     console.log(arg1 + arg2);
//     break;

//   default:
//     break;
// }
// // if (isNum(arg1) & isNum(arg2)) {
// //   return arg1 + arg2;
// // }
// }
// console.log(isNum(6));


const num1 = prompt("type num1");
const num2 = prompt("type num2");
const sign = prompt("type sign");

const calculator = function(num1, num2, sign) {
  switch (Number(num1) && Number(num2)) {
    // case '+'
    case (sign === "+"):
    
      return num1 + num2;
    default:
      return ("error");
  }
};
console.log(calculator(num1, num2, sign));
