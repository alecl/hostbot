
var externalvars = require('../config/externalvars.js');
var dateFormat = require('dateformat');

var meetup = require('meetup-api')({
    key: externalvars.MEETUP_API_KEY
});

module.exports = function (controller) {
    var meetupGroupId = externalvars.MEETUP_GROUP_ID;
    var meetupGroupUrlName = externalvars.MEETUP_GROUP_URLNAME;
    var meetupEventId = externalvars.MEETUP_EVENT_ID;

    controller.hears(['meetup', 'event'], 'direct_message,direct_mention', function (bot, message) {

        //meetup.getEvents({group_id: meetupGroupId}, function (err, resp) {
        // TODO: Can't seem to get to events from the past from groups API. Sending eventId directly for now. 
        meetup.getEvents({ event_id: meetupEventId }, function (err, resp) {
            var eventData = resp.results[0];
            var modDateTime = eventData.time+eventData.utc_offset; // so we can display properly regardless of nodeJs server time zone
            var reply =
                {
                    "text": "<http://www.meetup.com/" + meetupGroupUrlName + "/events/" + meetupEventId + "/|Meetup: " + eventData.name + ">",
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