const express = require('express');
const sendmessage = require('./lib/sendSMS');
const configs = require('./lib/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// const port = process.env.PORT;
const port = configs.port;

//receive external data
app.post('/sendMsg', (data, res) => {
    var phoneContact = typeof (data.body.phoneContact) == 'string' && data.body.phoneContact.trim().length == 12 ? data.body.phoneContact.trim() : false;
    var msg = typeof (data.body.msg) == 'string' && data.body.msg.trim().length > 0 ? data.body.msg.trim() : false;
    if (phoneContact && msg) {
        sendmessage.sendSMS('+' + phoneContact, msg, (err, response) => {
            if (err) {
                res.status(400);
                res.send(response);
            } else {
                res.status(200);
                res.send(response);
            }
        })
    } else {
        res.status(400);
        res.send({
            "Error": "One of the fields was invalid"
        });
    }
});
app.listen(port, () => {
    console.log(`App running on port:${port}`);

    //sendSMS('+256702066819','This is a real test message');

});