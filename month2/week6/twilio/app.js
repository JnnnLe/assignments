const accountSid = 'AC8dbce0433c5921aa81e254ab87b89fa9';
const authToken = 'ffe80ffb1769462f65793b3f77a757b8';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Fun dog fact: they are so cute!',
     from: '+15109074751',
     to: '+15624129667'
   })
  .then(message => console.log(message.sid));