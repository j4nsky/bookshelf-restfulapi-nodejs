const {
  saveBookHandler,
  showAllBookHandler,
  showBookDetailByIdHandler,
  changeBookDetailByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: showBookDetailByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: changeBookDetailByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
