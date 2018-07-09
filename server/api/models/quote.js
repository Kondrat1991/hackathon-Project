let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Quote = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: String,
        require: true
    },
    quote: {
        type: String,
        require: true
    },
    date: {
        type: Number,
        require: true
    },
    likes: {
        type: Number, default: 0
    },
    comments: {
        type: String,
        require: true
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('Quote', Quote);