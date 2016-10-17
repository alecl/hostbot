
module.exports = function (controller) {

    var internalvars = require('../config/internalvars.js');
    var dateFormat = require('dateformat');

    controller.hears(['hi', 'yo', 'hello', 'help', 'what'], 'direct_message,direct_mention', function (bot, message) {
        var reply = {
            "text": "Hi, there! There are the commands I support. Just mention or DM me with them. More will come!",
            "attachments": [
                {
                    "text": "`meetup` / `event` Info on the first Meetup. Will be expanded in the future.",
                    "mrkdwn_in": ["text"]
                },
                {
                    "text": "`uptime` How long the bot has been running?",
                    "mrkdwn_in": ["text"]
                },
                {
                    "text": "`beepboop` / `beep boop` Info on hosting",
                    "mrkdwn_in": ["text"]
                },
                {
                    "text": "`help` / `hi` / `hello` / `yo` / `what` This command list you're currently reading.",
                    "mrkdwn_in": ["text"]
                }
            ]
        }

        bot.reply(message, reply);

    });

    // Show information on Beep Boop
    controller.hears([/beep(\s*)boop/i], ['direct_message', 'direct_mention'], function (bot, message) {
        var text = 'Beep Boop is a ridiculously simple hosting platform for your Slackbots.'
        var attachments = [{
            fallback: text,
            pretext: 'I am hosted on BeepBoopHQ for the Chatbots NYC Meetup. :thumbsup:',
            title: 'Host, deploy and share your bot in seconds.',
            image_url: 'https://storage.googleapis.com/beepboophq/_assets/bot-1.22f6fb.png',
            title_link: 'https://beepboophq.com/',
            text: text,
            color: '#7CD197'
        }]

        bot.reply(message, {
            attachments: attachments
        });
    });

    controller.hears(['uptime'], 'direct_message,direct_mention', function (bot, message) {

        // TODO - localize to date format on Meetup's country one day
        var bornOnDateFormatted = dateFormat(internalvars.bornOnDate, "shortDate");

        bot.reply(message, 'I was born on ' + bornOnDateFormatted + '. I do sometimes sleep or get upgraded though. The latest me has been up for ' + formatUptime(process.uptime())) + ".";
    });

    function formatUptime(uptime) {
        var unit = 'second';
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'minute';
        }
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'hour';
        }
        if (uptime != 1) {
            unit = unit + 's';
        }

        uptime = Number(uptime).toFixed(2) + ' ' + unit;
        return uptime;
    }

};
