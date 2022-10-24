const { Autohook } = require('twitter-autohook');

(async start => {
  try {
    const webhook = new Autohook({
      token: 'x',
      token_secret: 'x',
      consumer_key: 'x',
      consumer_secret: 'x',
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
    // await webhook.subscribe({oauth_token: "x", oauth_token_secret: "x" })  
  } catch (e) {
    // Display the error and quit
    console.error(e);
    process.exit(1);
  }
})();  