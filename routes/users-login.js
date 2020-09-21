'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    res.render('template', {
        locals: {
            title: 'Login'
        },
        partials: {
            partial: 'partial-login'
        }
    })
})

module.exports = router;