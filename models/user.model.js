const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        require: true,
    },
    // todo: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Todo"
    // }]
});

const User = mongoose.model('user', UserSchema);

// User.collection.createIndex(
//     { "_id": 1 },
//     { unique: true },
// );

module.exports = User;