// Date objects = Objects that contain values that represent dates and times
// these date objects can be changed and formatted

// const date = new Date(2024, 1, 1, 2, 3, 4, 5);
// console.log(date);

// const year = date.getFullYear();
// const month = date.getMonth();
// const hour = date.getHours();
// console.log(month);
// console.log(year);
// console.log(hour);

// const date = new Date();

// date.setFullYear(2024);
// date.setMonth(1);
// date.setDate(1);
// date.setHours(4);
// date.setMinutes(55);
// date.setSeconds(38);
// console.log(date)

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");
//comparable
if (date1 < date2) {
  console.log("date 1 is bigger");
}
