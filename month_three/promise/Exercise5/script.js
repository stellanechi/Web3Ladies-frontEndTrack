//   Exercise 6: Fetching a Random Quote
// Instructions: Fetch a random quote from the Quotable API and log it to the console.
async function randomQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  // console.log(data.content); // Log the quote to the console
}

randomQuote(); // Call the function to fetch and log the quote

async function errorCatch() {
  try {
    const quote = await fetch("https://api.quotable.io/randohgredxm");
    const data = await quote.json();
    console.log(data.content);
  } catch (error) {
    console.error("Theres an error fetching your data:", error);
  }
}
errorCatch();
