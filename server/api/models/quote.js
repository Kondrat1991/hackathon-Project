let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const Comment = require('../models/comment');

const Quote = new Schema({
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
    comments: [Comment.schema],
    // comments: {
    //     type: Array,
    //     default: {
    //         comment: 'user',
    //         _id: new mongoose.Types.ObjectId,
    //     }
    // },
    userPic: {type: String, default: 'https://rusturkey.com/img/no_user.png'}
}, {
    versionKey: false
});

let newQuote = mongoose.model('Quote', Quote);

module.exports = mongoose.model('Quote', Quote);