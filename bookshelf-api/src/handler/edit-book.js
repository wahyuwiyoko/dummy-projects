const books = require("../books");

const editBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

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
      message: "Failed to update book. Please insert the book name!"
    });

    errorResponse.code(400);
    return errorResponse;
  }

  if (readPage > pageCount) {
    const errorResponse = h.response({
      status: "fail",
      message: "Failed to update book. readPage cannot be greater than pageCount!"
    });

    errorResponse.code(400);
    return errorResponse;
  }

  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  const index = books.findIndex(getBook => getBook.id === bookId);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt
    };

    const successResponse = h.response({
      status: "success",
      message: "Book successfully updated!"
    });

    successResponse.code(200);
    return successResponse;
  }

  const errorResponse = h.response({
    status: "fail",
    message: "Failed to update book. Id not found!"
  });

  errorResponse.code(404);
  return errorResponse;
};

module.exports = editBookByIdHandler;
