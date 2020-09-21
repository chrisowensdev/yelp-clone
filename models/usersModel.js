'use strict';

const db = require('./conn');

class Users {
    static async signUpUser(firstName, lastName, email, password) {
        try {
            const response = await db.result(`INSERT INTO reviewers (first_name, last_name, email, password) VALUES ($1, $2, $3, $4);`, [firstName, lastName, email, password]);
            console.log(response);
        } catch (error) {
            console.error(error);

        }
    }
}

module.exports = Users;