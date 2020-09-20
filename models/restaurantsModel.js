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

    static async getReviewsByRestaurant(slug) {
        try {
            const response = await db.any(`SELECT * FROM reviews INNER JOIN restaurants ON reviews.restaurants_id = restaurants.id INNER JOIN reviewers ON reviews.reviewer_id = reviewers.id WHERE restaurants.slug = '${slug}';`);
            return response;
        } catch (error) {
            console.error(error);
            return error
        }
    }

    static async getOne(slug) {
        try {
            const response = await db.one(`SELECT * FROM restaurants WHERE slug = '${slug}';`)
            return response;
        } catch (error) {
            console.error(error);
            return error
        }
    }

    static async addReview(title, content, stars, restaurantId) {
        try {
            console.log(restaurantId)
            const starRating = Number(stars);
            const response = await db.result(`INSERT INTO reviews (title, content, stars, reviewer_id, restaurants_id) VALUES ($1, $2, $3, $4, $5);`, [title, content, starRating, 1, restaurantId]);
            console.log(response);
        } catch (error) {
            console.error(error);

        }
    }
}

module.exports = Restaurants;