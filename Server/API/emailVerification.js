const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export const verify = async function(email){
    return client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
        .verifications
        .create({to: email, channel: 'email'})
        .then(verification => verification.sid);
}

/*
app.post('/api', (req, res) => {
    const email = req.body;

    verify(email)
    .then(verificationSid => res.json({verificationSid}))
    .catch(err => res.status(500).json({error:err}));
})
*/