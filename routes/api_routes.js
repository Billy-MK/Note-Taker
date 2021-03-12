const notesDB = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');
const fs = require('fs');

module.exports = (app) => {
    // API GET Request
    app.get('/api/notes', (req, res) => res.json(notesDB));

    // API POST Request
    app.post('/api/notes', (req, res) => {
      req.body.id = generateUniqueId();
      notesDB.push(req.body);
      let notesDBStringify = JSON.stringify(notesDB);
      fs.writeFile('./db/db.json', notesDBStringify, (err) => console.error(err));
      res.json(notesDB);
    }); 
};
