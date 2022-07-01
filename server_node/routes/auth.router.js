const express = require('express');

const User = require('../models/auth.model')

const router = express.Router();

router.post('/register', (req, res, next) => {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });
});

module.exports = router;