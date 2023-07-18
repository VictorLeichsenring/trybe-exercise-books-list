const { books } = require('./data/library');

const formatedBookNames = () => books.map((book) => {
  const { name, genre, author: { name: authorName } } = book;
  return `${name} - ${genre} - ${authorName}`;
});

module.exports = { formatedBookNames };
