// Async/Await = Asynch = makes a function return a promise
// Await = makes an asynch function wait for a promise

// Allows you to write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("You walked the dog");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash");
    }, 500);
  });
}
//add try and catch in case of errors

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("you finished all the chores");
  } catch (error) {
    console.error(error);
  }
}

doChores();
