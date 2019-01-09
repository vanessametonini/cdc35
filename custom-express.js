const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('node_modules/bootstrap/dist/'));

require('./routes/home')(app);
require('./routes/produtos')(app);

module.exports = app;