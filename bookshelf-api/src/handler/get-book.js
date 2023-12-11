const books = require("../books");

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  let getBook = books;

  // If name query is not empty, set book name to case insensitive
  if (name) {
    getBook = getBook.filter(book => book.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Convert reading and finished query value to number
  // And check corresponding value if 1 = true, and 0 = false
  if (Number(reading) == 1) {
    getBook = getBook.filter(book => book.reading === true);
  } else if (Number(reading) == 0) {
    getBook = getBook.filter(book => book.reading === false);
  }

  if (Number(finished) == 1) {
    getBook = getBook.filter(book => book.finished === true);
  } else if (Number(finished) == 0) {
    getBook = getBook.filter(book => book.finished === false);
  }

  const successResponse = h.response({
    status: "success",
    data: {
      books: getBook.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
      }))
    }
  });

  successResponse.code(200);
  return successResponse;
};

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const book = books.filter(getBook => getBook.id === bookId)[0];

  if (book) {
    const successResponse = h.response({
      status: "success",
      data: {
        book
      }
    });

    successResponse.code(200);
    return successResponse;
  }

  const errorResponse = h.response({
    status: "fail",
    message: "Book not found!"
  });

  errorResponse.code(404);
  return errorResponse;
};

module.exports = { getAllBooksHandler, getBookByIdHandler};
