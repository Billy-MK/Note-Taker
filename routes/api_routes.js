const notesDB = require('../db/db.json');

module.exports = (app) => {
    // API GET Request
    app.get('/api/notes', (req, res) => res.json(notesDB));

    // API POST Request
    app.post('/api/notes', (req, res) => {
      notesDB.push(req.body);
      res.json(true);
    }); 
}