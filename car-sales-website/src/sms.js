const express = require("express");
const twilio = require('twilio');
const app = express();

app.use(express.json());

// Replace with your actual Twilio Account SID and Auth Token
const accountSid = 'AC27a7e7562abde95ab603ce6290afba6b';
const authToken = '2f25b2924d56be69afc9ce4be20612d0';
const client = new twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      body,
      from: '+15675295742',
      to,
    })
    .then((message) => {
      console.log(`SMS sent with SID: ${message.sid}`);
      res.json({ success: true, message: 'SMS sent successfully' });
    })
    .catch((error) => {
      console.error(`Error sending SMS: ${error.message}`);
      res.status(500).json({ success: false, message: 'Failed to send SMS' });
    });
});

app.listen(3001, () => {
  console.log('Server is running on port 5001');
});





