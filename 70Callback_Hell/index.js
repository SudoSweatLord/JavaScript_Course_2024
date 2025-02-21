// Callback Hell = Situations in JavaScript where callbacks are nested
// within other callbacks to the degree where the code is difficult to Read
// Old pattern to handle asynchronous functions
// Use Promises and async/ await to avoid

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("task 3 complete");
    callback();
  }, 4000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("task 3 complete");
    callback();
  }, 2000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(()=>{
                console.log("Complete")
            })
        })
    })
})
task2();
task3();
task4();
