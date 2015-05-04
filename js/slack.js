function SendAlert(){
    Slack = require('node-slackr');
    slack = new Slack('https://hooks.slack.com/services/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');

    messages = {
        text: "Message",
        channel: "#general",
        username: "new-bot-name",
        icon_url: "https://slack.com/img/icons/app-57.png"
    }

    slack.notify(messages);
};

SendAlert();

