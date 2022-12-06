const express = require('express');
const router = express.Router();

//RUTA AL FORM DE DATOS
router.get('/data/add', (req, res) => {
    res.render('datos/new-data');
});

//RUTA QUE ALMACENA LOS DATOS
router.post('/data/new-data', (req, res) => {
    const { entidad, anio,total,mujeres,hombres,p_mujeres,p_hombres}=req.body;
    const errors = [];
    if (!entidad) {
        errors.push({ text: 'Por favor ingresa la entidad' });
    }
    if (!anio) {
        errors.push({ text: 'Por favor ingresa el anio' });
    }
    if (!total) {
        errors.push({ text: 'Por favor ingresa el total' });
    }
    if (!mujeres) {
        errors.push({ text: 'Por favor ingresa la c de mujeres' });
    }
    if (!hombres) {
        errors.push({ text: 'Por favor ingresa la c de hombres' });
    }
    if (!p_mujeres) {
        errors.push({ text: 'Por favor ingresa la c de mujeres' });
    }
    if (!p_hombres) {
        errors.push({ text: 'Por favor ingresa la c de mujeres' });
    }
    if (errors.length > 0) {
        res.render('data/new-data',
            {
                errors,
                entidad,
                anio, total, mujeres, hombres, p_mujeres, p_hombres

            }        )
    }
});

router.get('/data', (req, res) => {
    res.render('admin/index');
});

module.exports = router;


