const mongoose = require('mongoose');

var exceldataSchema = new mongoose.Schema({
    entidad: {
        type: String,
        required: 'This field is required.'
    },
    anio: {
        type: Number
    },
    total: {
        type: Number
    },
    mujeres: {
        type: Number
    },
    hombres: {
        type: Number
    },
    p_mujeres: {
        type: Number
    },
    p_hombres: {
        type: Number
    }
});

mongoose.model('excelData', exceldataSchema);
