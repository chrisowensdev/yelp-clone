'use strict';

const express = require('express');
const router = express.Router();
const restaurantsModel = require('../models/restaurantsModel');


router.get('/:name', async (req, res) => {
    const restaurantData = await restaurantsModel.getOne(req.params.name);
    const reviewData = await restaurantsModel.getReviewsByRestaurant(req.params.name)
    res.render('template', {
        locals: {
            title: restaurantData.restaurant_name,
            restaurantData: restaurantData,
            reviewData: reviewData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-business'
        }
    })

})

router.post('/:slug?', async (req, res) => {
    const {
        title,
        review,
        stars,
        restaurantId
    } = req.body;
    restaurantsModel.addReview(title, review, stars, restaurantId);
    res.redirect('back');
});


module.exports = router;