
function getQuotes() {
  fetch('https://api.quotable.io/random')
    .then(result => result.json())
    .then(quote => {
      const { content, author, length } = quote;
      const randomQuote = {
        content,
        author,
        length
      };
      console.log(randomQuote);

      return randomQuote;
    });
}

module.exports = getQuotes;

getQuotes();
