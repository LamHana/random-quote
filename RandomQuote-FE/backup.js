const api_url = "http://localhost:3000/";

var data;
const getApi = async () => {
  const response = await fetch(api_url);
  data = await response.json();
};

const randomQuote = async () => {
  var quoteText;
  var authorText;
  await getApi();
  quoteText = `<span> ${data.quote}</span>`;
  authorText = `<span> ${data.author}</span>`;
  document.getElementById("text").innerHTML = quoteText;
  document.getElementById("author").innerHTML = authorText;
};
getApi();
randomQuote();
const button = document.getElementById("new-quote");
button.addEventListener("click", () => {
  randomQuote();
});
