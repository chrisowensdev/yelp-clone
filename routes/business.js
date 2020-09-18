'use strict';

const express = require('express');
const router = express.Router();
const restaurantsModel = require('../models/restaurantsModel');


router.get('/:name', async (req, res) => {
    const restaurantData = await restaurantsModel.getOne(req.params.name);
    const reviewData = await restaurantsModel.getReviewsByRestaurant(req.params.name)
    console.log(reviewData);
    res.render('template', {
        locals: {
            title: restaurantData.restaurant_name,
            name: restaurantData.restaurant_name,
            category: restaurantData.category,
            reviewData: reviewData
        },
        partials: {
            partial: 'partial-business'
        }
    })

})


module.exports = router;