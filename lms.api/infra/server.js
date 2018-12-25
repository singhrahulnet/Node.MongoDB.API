const hapi = require('hapi');
const booksController = require('../booksController');

const PORT = 4000; const URL = 'localhost';

const server = hapi.server({
    port: PORT,
    host: URL
})

const init = async () => {
    server.route([
        {
            method: 'GET',
            path: '/api/books',
            handler: (req, res) => {
                return booksController.AllBooks();
            }
        },
        {
            method: 'GET',
            path: '/api/books/{id}',
            handler: (req, res) => {
                const { id } = req.params;
                return booksController.BookById(id);
            }
        },
        {
            method: 'POST',
            path: '/api/books',
            handler: (req, res) => {
                const { name, auther } = req.payload;
                return booksController.AddBook(name, auther);
            }
        },
        {
            method: 'GET',
            path: '/api/books/issuedbooks',
            handler: function (req, res) {
                return booksController.AllIssuedBooks();
            }
        },
        {
            method: 'GET',
            path: '/api/books/overduebooks',
            handler: function (req, res) {
                return booksController.AllOverdueBooks();
            }
        },
        {
            method: 'POST',
            path: '/api/books/issuedbooks',
            handler: function (req, res) {
                const { bookId, studentId } = req.payload;
                return booksController.IssueBook(bookId, studentId);
            }
        },
        {
            method: 'PUT',
            path: '/api/books/issuedbooks',
            handler: function (req, res) {
                const { bookId, newDate } = req.payload;
                return booksController.ExtendDays(bookId, newDate);
            }
        }
    ])
    await server.start();
    console.log('Server started @ ' + URL + ':' + PORT);
}

module.exports.Init = init;