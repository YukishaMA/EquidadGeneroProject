const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const excelData = mongoose.model('excelData');

router.get('/', (req, res) => {
    res.render("exceldata/addOrEdit", {
        viewTitle: "Insertar Regitro"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var exceldata = new excelData();
    exceldata.entidad = req.body.entidad;
    exceldata.anio = req.body.anio;
    exceldata.total = req.body.total;
    exceldata.mujeres = req.body.mujeres;
    exceldata.hombres = req.body.hombres;
    exceldata.p_mujeres = req.body.p_mujeres;
    exceldata.p_hombres = req.body.p_hombres;
    exceldata.save((err, doc) => {
        if (!err)
            res.redirect('exceldata/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("exceldata/addOrEdit", {
                    viewTitle: "Insert excelData",
                    exceldata: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    excelData.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('exceldata/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("exceldata/addOrEdit", {
                    viewTitle: 'Update excelData',
                    exceldata: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    excelData.find((err, docs) => {
        if (!err) {
            res.render("exceldata/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving exceldata list :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    excelData.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("exceldata/addOrEdit", {
                viewTitle: "Update excelData",
                _exceldata: doc,
                get exceldata() {
                    return this._exceldata;
                },
                set exceldata(value) {
                    this._exceldata = value;
                },
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    excelData.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/exceldata/list');
        }
        else { console.log('Error in exceldata delete :' + err); }
    });
});

module.exports = router;

