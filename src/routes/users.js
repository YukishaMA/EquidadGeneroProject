const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('users_views/signin');
});
router.get('/users/signup', (req, res) => {
    res.render('users_views/signup');
});
module.exports = router;