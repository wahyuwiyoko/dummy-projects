const { nanoid } = require("nanoid");
const books = require("../books");

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading
  } = request.payload;

  if (!name) {
    const errorResponse = h.response({
      status: "fail",
      message: "Failed to add book. Please insert the book name!"
    });

    errorResponse.code(400);
    return errorResponse;
  }

  if (readPage > pageCount) {
    const errorResponse = h.response({
      status: "fail",
      message: "Failed to add book. readPage cannot be greater than pageCount!"
    });

    errorResponse.code(400);
    return errorResponse;
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt
  };

  books.push(newBook);

  const isSuccess = books.filter(book => book.id === id);

  if (isSuccess) {
    const successResponse = h.response({
      status: "success",
      message: "Book successfully added!",
      data: { bookId: id }
    });

    successResponse.code(201);
    return successResponse;
  }

  const errorResponse = h.response({
    status: "fail",
    message: "Failed to add book!"
  });

  errorResponse.code(500);
  return errorResponse;
};

module.exports = addBookHandler;
