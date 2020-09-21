'use strict';

const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // PRIVATE METHOD TO CHECL PASSWORD VALIDITY
    async checkPassword(hashedPassword) {
        // RETURNS TRUE OF FALSE
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async save() {
        try {
            const response = await db.one(`INSERT INTO reviewers (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id;`, [this.firstName, this.lastName, this.email, this.password]);
            console.log("User was created with ID:", response.id);
            return response;
        } catch (error) {
            console.error('ERROR:', error.message);
            return error.message;
        }
    }

    async login() {
        try {
            const response = await db.one(`SELECT id, first_name, last_name, email, password FROM reviewers WHERE email = $1;`, [this.email]);
            const isValid = await this.checkPassword(response.password);
            if (!!isValid) {
                const {
                    first_name,
                    id
                } = response;
                return {
                    isValid,
                    first_name,
                    user_id: id
                };
            } else {
                return {
                    isValid
                };
            }
        } catch (error) {
            console.error('ERROR:', error.message);
            return error.message;
        }
    }
}

module.exports = User;