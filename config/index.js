const { PORT, MONGODB_LIVE } = require('./environment');
const dbConfigMongo = require('./db');

module.exports = {
    PORT, 
    MONGODB_LIVE,
    dbConfigMongo,
};