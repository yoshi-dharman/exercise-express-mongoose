const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    _id: Number,
    user_id: Number,
    todo: {
        type: String,
        require: true,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // }
});

const Todo = mongoose.model('todo', TodoSchema);

// Todo.collection.createIndex(
//     { "_id": 1 },
//     { unique: true },
// );

module.exports = Todo;