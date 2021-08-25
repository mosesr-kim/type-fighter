const axios = require('axios');

function getQuotes() {
  axios
    .get('https://api.quotable.io/random')
    .then(response => {
      const { content, author, length } = response.data;
      const quote = {
        content,
        author,
        length
      };

      return quote;
    });
}

module.exports = getQuotes;
