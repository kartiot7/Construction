const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require ('./config/db');

const app = express();
const port = process.env.PORT || 7000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require ('./routes/clientRoutes');

app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
