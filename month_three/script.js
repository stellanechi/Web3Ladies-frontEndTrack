// Function that returns a promise
function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 1000); // 1-second delay
  });
}

// Using .then() to log the message
delayedPromise().then((message) => {
  console.log(message);
});

// Function that returns a promise which randomly resolves or rejects
function delayedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% chance to resolve or reject
      if (success) {
        resolve("Promise resolved!");
      } else {
        reject("Promise rejected!");
      }
    }, 1000); // 1-second delay
  });
}

// Using .then() to log the success message and .catch() to handle the error
delayedPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
