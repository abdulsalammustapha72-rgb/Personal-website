require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({ credentials: true }));

app.use(express.urlencoded({ extended: true }));

const ConnectDB = require('./config/mongo');

const enquiryRoute = require('./route/enquiryRoute');

app.use('/api', enquiryRoute);

ConnectDB();

app.listen(5000, () => {
    console.log('PORT is running on 5000');
});