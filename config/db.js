const mongoose = require('mongoose')
const { MONGODB_LIVE } = require('./environment');

mongoose.connect(MONGODB_LIVE, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const dbConfigMongo = mongoose.connection;
module.exports = dbConfigMongo;