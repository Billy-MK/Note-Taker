// Dependencies

const express = require('express');

// Express server
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving static files in Express

app.use(express.static('./public'))
app.use(express.static('./db'))

// Routes

require('./routes/api_routes.js')(app);
require('./routes/HTML_Routes.js')(app);

// Listener

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});