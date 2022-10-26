// fetch(
//   "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
// )
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   })
const api_url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

// Array.prototype.random = function () {
//   return this[Math.floor(Math.random() * this.length)];
// };
var data;
function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const getApi = async () => {
  const response = await fetch(api_url);
  data = await response.json();
  localStorage.setItem("data", JSON.stringify(data));
};

const randomQuote = async () => {
  var quoteText;
  var authorText;
  data = JSON.parse(localStorage.getItem("data"));
  if (data == null) await getApi(); // use async await to avoid bat dong bo
  // getApi() se phai doi de get va chay cac doan code o duoi truoc
  // => Solution: use await de doi ham getApi()
  let random = randomItem(data.quotes);
  quoteText = `<span> ${random.quote}</span>`;
  authorText = `<span> ${random.author}</span>`;
  document.getElementById("text").innerHTML = quoteText;
  document.getElementById("author").innerHTML = authorText;
};

randomQuote();
const button = document.getElementById("new-quote");
button.addEventListener("click", () => {
  randomQuote();
});
console.log(button);
