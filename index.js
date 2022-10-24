const { Autohook } = require('twitter-autohook');

(async start => {
  try {
    const webhook = new Autohook({
      token: '3elq1xfLI1qpuAJRcyljsRR97',
      token_secret: 'JNymINTMHxEDDo9TOBM0EqDF4JuxVekiVRGNHGpiSohJ54LMSe',
      consumer_key: 'RmRDS21tbGU1SDBzdkRfTUpIQWg6MTpjaQ',
      consumer_secret: 'a44DJL6fHdWWeUY6fx8c5mrcbIlo3v2X0V8koxmjw9RVQNCHtq',
      env: 'dev'
    });
    
    // Removes existing webhooks
    // await webhook.removeWebhooks();
    
    // Starts a server and adds a new webhook
    await webhook.startServer();
    webhook.on("event", event => console.log("Something happened:", event));
    // await webhook.subscribe();
    
    // Subscribes to your own user's activity
    // // await webhook.subscribe({oauth_token: process.env.TWITTER_ACCESS_TOKEN, oauth_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET});
    // await webhook.subscribe({oauth_token: "RmRDS21tbGU1SDBzdkRfTUpIQWg6MTpjaQ", oauth_token_secret: "a44DJL6fHdWWeUY6fx8c5mrcbIlo3v2X0V8koxmjw9RVQNCHtq" })  
  } catch (e) {
    // Display the error and quit
    console.error(e);
    process.exit(1);
  }
})();  