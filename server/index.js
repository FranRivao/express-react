const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

// Db connection
require('./database/db.js');

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/blogs', require('./routes/blogRoutes'));

app.get('/', (req, res) => {
    res.json({"message": "hola"})
});

// Server on port
app.listen(port, () => {
    console.log('Server started');
});