const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 5000;



app.use(bodyParser.urlencoded({ extended: false }));

// Replace these with your Twilio credentials
const accountSid = 'AC1ef45829b9fcc44061431e2c34051aae';
const authToken = '72703a5f08efdfe91bea4c7fdd6fe434';
const twilioPhoneNumber = '+639382227052';

const client = twilio('AC1ef45829b9fcc44061431e2c34051aae', '72703a5f08efdfe91bea4c7fdd6fe434');

app.post('/send-otp', (req, res) => {
    const { to } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Set the message to include the OTP
    const message = `Your OTP (One-Time Password) is: ${otp}`;


    client.messages
        .create({
            body: message,
            from: twilioPhoneNumber,
            to: to,
        })
        .then((message) => {
            console.log(`OTP sent: ${message.sid}`);
            res.send('OTP sent successfully');
        })
        .catch((error) => {
            console.error(`Error sending OTP: ${error.message}`);
            
            // Check if Twilio returned an error code
            if (error.code) {
                res.status(error.code).send(error.message);
            } else {
                res.status(500).send('Error sending OTP');
            }
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


