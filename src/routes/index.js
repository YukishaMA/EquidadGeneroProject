const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
<<<<<<< HEAD
    res.render('index');
});

router.get('/about', (req, res)=> {
    res.render('about');
});
=======
    res.render('index.hbs');
});

//Esta ruta permite que si el usuario entra a /about el render lo manda a la pagina about
//send manda solo un mensaje de texto
>>>>>>> 696f430e59529cfab3c24c770fa8ada510704b87

router.get('/about', (req, res) => {
    res.render('about.hbs');

});
module.exports = router;
//permite crear rutas para el servidor
