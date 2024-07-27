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
