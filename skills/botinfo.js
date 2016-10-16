
module.exports = function (controller) {

    var internalvars = require('../config/internalvars.js');
    var dateFormat = require('dateformat');

    controller.hears(['hi', 'hello', 'help', 'what'], 'direct_message,direct_mention', function (bot, message) {
        var reply = {
            "text": "Hi, there! There are the commands I support. Just mention or DM me with them. More will come!",
            "attachments": [
                {
                    "text": "`meetup`/`event` Info on the first Meetup. Will be expanded in the future.",
                    "mrkdwn_in": ["text"]
                },
                {
                    "text": "`uptime` How long the bot has been running?",
                    "mrkdwn_in": ["text"]
                },
                {
                    "text": "`help`/`hi`/`what` This command list you're currently reading.",
                    "mrkdwn_in": ["text"]
                }
            ]
        }

        bot.reply(message, reply);

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
