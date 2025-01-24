const e = require('express');
const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.send('hello word');
});

module.exports = router;