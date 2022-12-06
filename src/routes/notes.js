const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

router.post('/notes/new-note', async(req, res) => {
    const {title, description}= req.body;
    const errors = [];
    if(!title){
        errors.push({text: 'Por favor inserte un Titulo'});
    }
    if(!description){
        errors.push({text: 'Por favor inserte una descripcion'});
    }
    if(errors.length > 0){
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    }
    else{
        const newNote = new Note({title, description});
        console.log(newNote);
        await newNote.save();
        res.redirect('/notes');
    }
    
});

router.get('/notes', (req, res) => {
    res.render('notes/all-notes');
});

router.post('/',upload.single('excel'),(req,res)=>{
    var workbook =  XLSX.readFile(req.file.path);
    var sheet_namelist = workbook.SheetNames;
    var x=0;
    sheet_namelist.forEach(element => {
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
        excelModel.insertMany(xlData,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })
        x++;
    });
    res.redirect('/');
  });

router.get('/excel',(req,res)=>{
    excelModel.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            if(data!=''){
                res.render('home',{result:data});
            }else{
                res.render('home',{result:{}});
            }
        }
    });
  });

module.exports = router;
