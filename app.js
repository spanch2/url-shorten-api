const express = require('express');
const app = express();
const connectToDB = require('./config/db')

connectToDB();

const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
    console.log(`Server started at ${host} port ${port}`);
});