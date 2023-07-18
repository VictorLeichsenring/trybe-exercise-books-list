const { books } = require('./data/library');

const nameAndAge = () => {
  const authorInfo = books.map((book) => {
    const authorName = book.author.name;
    const authorAge = book.releaseYear - book.author.birthYear;
    return { author: authorName, age: authorAge };
  });

  authorInfo.sort((a, b) => a.age - b.age);

  return authorInfo;
};

module.exports = { nameAndAge };
