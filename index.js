// const logAdult = function(age, AGE_ADULT = 18) {
//   return (age === AGE_ADULT) ? 'adult' : 'not adult'
// }
// // console.log(logAdult(8));

// // task type something
// const userData = prompt ('type something');

// const checkUserData = function(val) {
//   return (val === null || val === ' ' || val === '') ? 'error' : 'thank you';
// }
// console.log(typeof(userData), checkUserData(userData));

// // task type something another solution
// const checkUserData1 = function() {
//   return prompt ('type something') ? 'thank you' : 'error';
// }
// console.log(checkUserData1(prompt));

// const userDay = prompt('type weekday number');

// const workdayOrWeekend = function(num) {
//   return (num >= 1 && num <= 5) ? 'workday' : (num >=6 && num <= 7) ? 'weekend' : 'error';
// }
// console.log(workdayOrWeekend(userDay));

const userMonth = prompt("type month number");

const wichSeason = function(num) {
  switch (userMonth) {
    case "1":
    case "2":
    case "12":
      return("winter");
      break;
    case "3":
    case "4":
    case "5":
      return ("spring");
      break;
    case "6":
    case "7":
    case "8":
      return ("sumer");
      break;
    case "9":
    case "10":
    case "11":
      return ("fall");
      break;
    default:
      return ("error");
      break;
  }
}

console.log(wichSeason(userMonth));
