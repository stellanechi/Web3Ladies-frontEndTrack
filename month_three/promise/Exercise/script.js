// Exercise 1: Creating a Basic Promise
// Instructions: Write a function that returns a promise, which resolves after a 1-second delay with the message "Promise resolved!". Then use .then() to log the message.

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

// Exercise 2: Error Handling with Promises
// Instructions: Modify the previous function to randomly either resolve or reject. Use .catch() to handle the error scenario.
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

// Exercise 5: Fetching Data from a Public API
// Instructions: Use fetch to get a list of posts from the JSONPlaceholder API. Handle the response and log the titles of the first 5 posts.
