const { RTMClient } = require('@slack/client');
const { config } = require('../config');

const token = config.access_token || '';

const bot = new RTMClient(token);
bot.start();

bot.on('message', (event) => {
    const { type } = event;
    if (type === 'message') {
        messageReceiver(event);
    }
});

const messageReceiver = event => {
    const { text, channel } = event;
    if (text.startsWith('.') && text.length < 10) {
        switch (text) {
            case '.지금': {
                sendMessage(new Date().toLocaleString(), channel);
                break;
            }
            default:
                sendMessage('Default message', channel);
        }
    }
};

const sendMessage = (message, conversationId) => {
    bot.sendMessage(message, conversationId)
        .then(console.log)
        .catch(console.error);
};