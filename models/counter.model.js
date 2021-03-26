const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    _id: String,
    val: Number,
});

const Counter = mongoose.model('counter', CounterSchema);

module.exports = Counter;