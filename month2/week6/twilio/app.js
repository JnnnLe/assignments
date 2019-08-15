const accountSid = 'Get your own';
const authToken = 'Get your own';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Fun dog fact: they are so cute!',
     from: '+15109074751',
     to: '+15624129667'
   })
  .then(message => console.log(message.sid));