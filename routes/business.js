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
            reviewData: reviewData
        },
        partials: {
            partial: 'partial-business'
        }
    })

})

router.post('/', async (req, res) => {

})


module.exports = router;