'use strict';

const host = 'lallah.db.elephantsql.com';
const database = 'xgaiqhvj';
const user = 'xgaiqhvj';
const password = 'qH6LycyjwoL19ovzm7Z2sxKCMtquPIjw';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY: ", event.query);
    }
})

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const db = pgp(options);

module.exports = db;