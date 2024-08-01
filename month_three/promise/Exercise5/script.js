//   Exercise 6: Fetching a Random Quote
// Instructions: Fetch a random quote from the Quotable API and log it to the console.
// async function randomQuote() {
//   const res = await fetch("https://api.quotable.io/random");
//   const data = await res.json();
//   console.log(data.content); // Log the quote to the console
// }

// randomQuote(); // Call the function to fetch and log the quote

function errorCatch() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}
errorCatch();
