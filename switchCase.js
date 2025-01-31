let job = "Sales Engineer";

// if (job === "Software Developer") {
//   console.log("Writes code");
// } else if (job === "Designer") {
//   console.log("Designs cool stuff");
// } else {
//   console.log("Works directly with customers");
// }

//for performing comparison equality and cleaner code switch statement can be used 
switch (job) {
  case "Software Developer":
    console.log("Writes code");
    break;
  case "Designer":
    console.log("Designs cool stuff");
    break;
  default:
    console.log("Works directly with the customer");
}
//no break needed for the default statement
 