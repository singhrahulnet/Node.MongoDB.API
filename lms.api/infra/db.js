const mongoose = require('mongoose');

const init = async () => {
    mongoose.connect('mongodb://bookkeeper:Password1@ds241664.mlab.com:41664/bookstoreapi');
    mongoose.connection.once('open', () => {
        console.log('DB Connection open');
    })
}

module.exports.Init = init;