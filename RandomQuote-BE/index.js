const express = require("express");
const app = express();
const port = 3000;
const quotes = require("./data/quotes.json");

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

app.get("/", (req, res) => {
  const data = randomItem(quotes);
  res.json({
    quote: data.quote,
    author: data.author,
  });
});

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
