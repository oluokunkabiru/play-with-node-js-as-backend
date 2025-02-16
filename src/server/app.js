require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const db = require('nedb-promises');

const v1 = require('../routers/v1');


const app = express();
app.use(express.json());


const user =  db.create('Sender.db');


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1', v1);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
