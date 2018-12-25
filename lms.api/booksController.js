const bookService = require('./service/bookService');
const bookAllocationService = require('./service/bookAllocationService');
const IssuedBook = require('./models/issuedBooks');
const ADDDUEDATE = 5;


//Book Service Methods
const allBooks = () => bookService.AllBooks();
const bookById = (id) => bookService.BookById(id);
const addBook = (n, a) => bookService.AddBook(n, a);

//Book Allocation Service Methods
const allIssuedBooks = () => bookAllocationService.AllIssuedBooks();
const issueBook = (bookId, studentId) => {
    const issueDate = new Date();
    const returnDate = new Date();
    returnDate.setDate(issueDate.getDate() + ADDDUEDATE);
    const issuedBook = new IssuedBook({ bookId, studentId, issueDate, returnDate });
    return bookAllocationService.AddIssuedBook(issuedBook);
}
const overdueBooks = () => bookAllocationService.AllOverdueBooks();
const extendDays = (bookId, newDate) => bookAllocationService.ExtendDays(bookId, newDate)


module.exports.AllBooks = allBooks;
module.exports.BookById = bookById;
module.exports.AddBook = addBook;

module.exports.AllIssuedBooks = allIssuedBooks;
module.exports.IssueBook = issueBook;
module.exports.AllOverdueBooks = overdueBooks
module.exports.ExtendDays = extendDays;