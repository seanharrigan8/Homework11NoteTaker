const fs = require('fs');
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); 
const path = require('path');



//api route to GET notes//
router.get('/notes', (req, res) => {fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

//api route to POST a new route //

router.post ('/notes', (req, res) => {
    const newNote = {...req.body, id: uuidv4()};

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

//for later, delete route //

module.exports = router
