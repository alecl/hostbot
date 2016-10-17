
var externalvars = require('../config/externalvars.js');
var dateFormat = require('dateformat');

var meetup = require('meetup-api')({
    key: externalvars.MEETUP_API_KEY
});

module.exports = function (controller) {
    var meetupGroupId = externalvars.MEETUP_GROUP_ID;
    var meetupGroupUrlName = externalvars.MEETUP_GROUP_URLNAME;

    controller.hears(['meetup', 'event'], 'direct_message,direct_mention', function (bot, message) {

    meetup.getEvents({ group_id: meetupGroupId, text_format: "plain", status: "past" }, function (err, resp) {
            var eventData = resp.results[0]; // First ever meetup of group for now
            var modDateTime = eventData.time+eventData.utc_offset; // so we can display properly regardless of nodeJs server time zone
            var reply =
                {
                    "text": "<" + eventData.event_url + "|Meetup: " + eventData.name + ">",
                    "attachments": [
                        {
                            "author_name": "MeetUp API",
                            "author_icon": "http://img2.meetupstatic.com/img/422066906568/logo/swarm/m_swarm_128x128.png",
                            "fields": [
                                {
                                    "title": "Time",
                                    "value": dateFormat(modDateTime, "UTC:mm-dd-yy h:MM TT"),
                                    "short": true
                                },
                                {
                                    "title": "RSVP",
                                    "value": eventData.yes_rsvp_count,
                                    "short": true
                                }
                            ]
                        }
                    ]
                }

            bot.reply(message, reply);
        });

    });
}