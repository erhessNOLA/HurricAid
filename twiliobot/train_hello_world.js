const { config } = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

phrases = [
  'hello',
  'hi',
  'Hello',
  'Hi there'
]

// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
phrases.forEach(function (item) {
  sample = client.autopilot.assistants(config.assistant)
    .tasks('hello-world')
    .samples
    .create({
      language: 'en-us',
      taggedText: item,
    })
    .then(sample => console.log(sample.sid))
    .done();
})