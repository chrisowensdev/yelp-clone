'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('OK').end();
})

module.exports = router;