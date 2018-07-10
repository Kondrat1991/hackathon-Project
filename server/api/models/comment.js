let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Comment = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
         comment: {type: String}
    }
);

module.exports = mongoose.model('Comment', Comment);