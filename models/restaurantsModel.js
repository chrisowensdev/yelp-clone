'use strict';

const db = require('./conn');

class Restaurants {
    static async getAllRestaurants() {
        try {
            const response = await db.any(`SELECT * FROM restaurants;`);
            return response;
        } catch (error) {
            console.error(error);
            return error
        }
    }
}

module.exports = Restaurants;