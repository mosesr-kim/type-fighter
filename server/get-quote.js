const axios = require('axios');

function getQuote() {
  return axios
    .get('https://api.quotable.io/random')
    .then(response => {
      const { content, author, length } = response.data;
      const quote = {
        content,
        author,
        length
      };

      return quote;
    })
    .catch(err => console.error(err));
}

module.exports = getQuote;
