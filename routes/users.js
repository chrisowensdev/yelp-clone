'use strict';

const express = require('express');
const router = express.Router();
const users = require('../models/usersModel');

router.get('/', (req, res) => {
    res.redirect('/users/login')
})

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login'
        },
        partials: {
            partial: 'partial-login'
        }
    });
});

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Signup'
        },
        partials: {
            partial: 'partial-signup'
        }
    });
});

router.post('/signup', async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;
    console.log('Form submission is: ', req.body);
    res.sendStatus(200);
});

router.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;
    console.log('Login form submission:', req.body);
    res.sendStatus(200);
})

module.exports = router;