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

module.exports = router;
