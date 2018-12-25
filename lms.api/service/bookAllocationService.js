const IssuedBook = require('../models/issuedBooks');


const allIssuedBooks = async () => {
    return IssuedBook.find();
}

const addIssuedBook = async (bookModel) => {
    return bookModel.save();
}

const allOverdueBooks = async () => {
    return IssuedBook.find({ 'returnDate': { '$lt': new Date() } });
}

const extendDays = async (bid, newDate) => {
    console.log(newDate);
    return IssuedBook.findOneAndUpdate({ 'bookId': bid }, { '$set': { 'returnDate': newDate } });
}

module.exports.AllIssuedBooks = allIssuedBooks;
module.exports.AddIssuedBook = addIssuedBook;
module.exports.AllOverdueBooks = allOverdueBooks;
module.exports.ExtendDays = extendDays;
