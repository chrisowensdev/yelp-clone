'use strict';

const express = require('express');
const router = express.Router();
const restaurantsModel = require('../models/restaurantsModel');


router.get('/:name?', async (req, res) => {
    const params = req.params;
    console.log("Req params from business is:", params);
    const restaurantData = await restaurantsModel.getAllRestaurants();
    restaurantData.map(restaurant => {
        if (restaurant.slug === req.params.name) {
            res.render('template', {
                locals: {
                    title: restaurant.restaurant_name,
                    name: restaurant.restaurant_name,
                    category: restaurant.category
                },
                partials: {
                    partial: 'partial-business'
                }
            })
        }
    })

})


module.exports = router;