const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const isVerified = function(email, code){
    client.verify.v2.services(TWILIO_SERVICE_SID)
                .verificationChecks
                .create({to: email, code: code})
                .then(verification_check => verification_check.sid);
}

app.post('/api', (req, res) => {
    const {email, code} = req.body

    isVerified(email, code)
    .then(status => res.json({status}))
    .catch(err => res.status(500).json({error:err}))
})