'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;

    res.render('template', {
        locals: {
            title: 'Signup'
        },
        partials: {
            partial: 'partial-signup'
        }
    })
})

module.exports = router;