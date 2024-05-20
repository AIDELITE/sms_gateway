const express = require('express');
const sendSMS = require('./lib/sendSMS');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const port = process.env.PORT;

app.listen(2100, () => {
    console.log(`App running on port:2100`);

    sendSMS('+256702066819','This is a real test message');

});