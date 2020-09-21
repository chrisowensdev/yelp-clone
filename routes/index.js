'use strict';

const express = require('express');
const router = express.Router();
const restaurantsModel = require('../models/restaurantsModel');



router.get('/', async (req, res) => {
    const restaurantData = await restaurantsModel.getAllRestaurants();
    res.render('template', {
        locals: {
            title: 'Yelp Clone',
            restaurantData: restaurantData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-index'
        }
    })
})

module.exports = router;