const express = require('express');
const path = require('path');
const studentDb = require('./data/student-db.js');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));




app.get('/students', (req, res) => {
    res.render('students/index', {students: studentDb.getAll()})
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});

