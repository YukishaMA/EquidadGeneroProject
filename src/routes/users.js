const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('auth/signin');
});

router.get('/users/signup', (req, res)=> {
    res.render('auth/signup');
});

module.exports = router;