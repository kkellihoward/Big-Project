const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
//const accountSid = 'AC42ec57ff145d167c73b79bfc0b3742cb';
//const authToken = 'dceafb194226209ba66f3e69f1036a74';
const client = require('twilio')(accountSid, authToken);

const verify = function(email){
    client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
        .verifications
        .create({to: email, channel: 'email'})
        .then(verification => verification.sid);
}

app.post('/api', (req, res) => {
    const email = req.body;

    verify(email)
    .then(verificationSid => res.json({verificationSid}))
    .catch(err => res.status(500).json({error:err}));
})