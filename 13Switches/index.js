// Switch can be an efficent replacement for too many if else statements
// let day = "pi";

// switch (day) {
//   case 1:
//     console.log("It is Monday");
//     break;
//   case 2:
//     console.log("It is Tuesday");
//     break;
//   case 3:
//     console.log("It is Wednesday");
//     break;
//   case 4:
//     console.log("It is Thursday");
//     break;
//   case 5:
//     console.log("It is Friday");
//     break;
//   case 6:
//     console.log("It is Saturday");
//     break;
//   case 7:
//     console.log("It is Sunday");
//     break;
//   default:
//     console.log(`${day} is not a day`);
// }

let testScore = 98;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
  default:
    letterGrade = "F";
}
console.log(letterGrade);
