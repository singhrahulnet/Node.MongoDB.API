const Book = require('../models/book');


const allBooks = async () => {
    return Book.find();
}

const bookById = async (id) => {
    return Book.findById(id);
}
const addBook = async (name, auther) => {
    const bookModel = new Book({ name, auther });
    return bookModel.save();
}

module.exports.AllBooks = allBooks;
module.exports.BookById = bookById;
module.exports.AddBook = addBook;
