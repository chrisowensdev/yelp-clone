'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
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