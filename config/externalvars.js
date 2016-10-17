module.exports = {

}

var configError = function (keyName) {
  console.error("ExternalVars error! Could not load a value for: "+keyName);
  process.exit(1);
}

// TODO: extract repeated function?
Object.defineProperty(module.exports, 'SLACK_TOKEN', {
    get: function() {
        if (!process.env.SLACK_TOKEN)
            configError('SLACK_TOKEN');
        else
            return process.env.SLACK_TOKEN;
    }
});

Object.defineProperty(module.exports, 'MEETUP_API_KEY', {
    get: function() {
        if (!process.env.MEETUP_API_KEY)
            configError('MEETUP_API_KEY');
        else
            return process.env.MEETUP_API_KEY;
    }
});

Object.defineProperty(module.exports, 'MEETUP_GROUP_ID', {
    get: function() {
        if (!process.env.MEETUP_GROUP_ID)
            configError('MEETUP_GROUP_ID');
        else
            return process.env.MEETUP_GROUP_ID;
    }
});

Object.defineProperty(module.exports, 'MEETUP_GROUP_URLNAME', {
    get: function() {
        if (!process.env.MEETUP_GROUP_URLNAME)
            configError('MEETUP_GROUP_URLNAME');
        else
            return process.env.MEETUP_GROUP_URLNAME;
    }
});

Object.defineProperty(module.exports, 'DASHBOT_API_KEY', {
    get: function() {
        if (!process.env.DASHBOT_API_KEY)
            configError('DASHBOT_API_KEY');
        else
            return process.env.DASHBOT_API_KEY;
    }
});

Object.defineProperty(module.exports, 'WUNDERGROUND_API_KEY', {
    get: function() {
        if (!process.env.WUNDERGROUND_API_KEY)
            configError('WUNDERGROUND_API_KEY');
        else
            return process.env.WUNDERGROUND_API_KEY;
    }
});

Object.defineProperty(module.exports, 'CHARTURL_API_KEY', {
    get: function() {
        if (!process.env.CHARTURL_API_KEY)
            configError('CHARTURL_API_KEY');
        else
            return process.env.CHARTURL_API_KEY;
    }
});

