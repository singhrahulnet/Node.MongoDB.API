const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssuedBookSchema = new Schema({
    bookId: String,
    studentId: String,
    issueDate: Date,
    returnDateExtended: Boolean,
    returnDate: Date,
});

module.exports = mongoose.model('IssuedBook', IssuedBookSchema);