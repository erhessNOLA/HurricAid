const { config } = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);


client.autopilot.assistants(config.assistant)
  .modelBuilds
  .create({ uniqueName: 'v0.1' })
  .then(model_build => console.log(model_build.sid))
  .done();