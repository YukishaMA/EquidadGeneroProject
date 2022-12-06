const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
});

//Esta ruta permite que si el usuario entra a /about el render lo manda a la pagina about
//send manda solo un mensaje de texto

router.get('/about', (req, res) => {
    res.render('about.hbs');

});
module.exports = router;
//permite crear rutas para el servidor
