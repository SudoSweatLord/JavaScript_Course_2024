//repeat code a limited amount of times

for (let i = 10; (i = 0); i -= 1) {
  console.log(i);
}
console.log("Happy New Year");
//continue will skip an iteration
//break will stop the loop entirely
for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    continue;
  } else {
    console.log(i);
  }
  console.log(i);
}
