'use strict';

const express = require('express');
const router = express.Router();
const users = require('../models/usersModel');

router.get('/login', async (req, res) => {
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

router.get('/signup', async (req, res) => {
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