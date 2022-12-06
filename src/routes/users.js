const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
<<<<<<< HEAD
    res.render('auth/signin');
});

router.get('/users/signup', (req, res)=> {
    res.render('auth/signup');
=======
    res.render('users_views/signin');
});
router.get('/users/signup', (req, res) => {
    res.render('users_views/signup');
>>>>>>> 696f430e59529cfab3c24c770fa8ada510704b87
});
module.exports = router;