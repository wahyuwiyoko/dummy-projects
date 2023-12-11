const addBookHandler = require("./handler/add-book");
const { getAllBooksHandler, getBookByIdHandler } = require("./handler/get-book");
const editBookByIdHandler = require("./handler/edit-book");
const deleteBookByIdHandler = require("./handler/delete-book");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler
  }
];

module.exports = routes;
