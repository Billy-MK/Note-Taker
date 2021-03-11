// Dependencies

const express = require('express');

// Express server
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

require('./routes/HTML_Routes.js')(app);
require('./routes/api_routes.js')(app);

// Listener

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
