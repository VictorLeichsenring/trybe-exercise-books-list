const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  const formattedAuthors = books.map((book) => {
    const authorName = book.author.name;
    const authorBirthYear = book.author.birthYear;
    return `${authorName} - ${authorBirthYear}`;
  });

  return formattedAuthors;
};

module.exports = { formatedAuthorNamesBirth };
