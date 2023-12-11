const books = require("../books");

const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex(getBook => getBook.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);

    const successResponse = h.response({
      status: "success",
      message: "Book successfully deleted!"
    });

    successResponse.code(200);
    return successResponse;
  }

  const errorResponse = h.response({
    status: "fail",
    message: "Failed to delete book. Id not found!"
  });

  errorResponse.code(404);
  return errorResponse;
};

module.exports = deleteBookByIdHandler;
