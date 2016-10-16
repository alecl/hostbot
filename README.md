# hostbot

## Overview
A node.js simple bot for [MeetUp](https://www.meetup.com/) meeting guests in a Slack channel. Host the bot yourself or on [Beep Boop](https://beepboophq.com).

It was started from a skeleton from Beep Boop ([their original README here](https://github.com/alecl/hostbot/blob/master/BeepBoop.md)). Visit [Beep Boop](https://beepboophq.com/docs/article/overview) to get the scoop on the the Beep Boop hosting platform. The Slack API documentation can be found [here](https://api.slack.com/).

## Assumptions
* You have already signed up with [Beep Boop](https://beepboophq.com) and have a local fork of this project.
* You have sufficient rights in your Slack team to configure a bot and generate/access a Slack API token.

## Usage

### Run locally
	npm install
	SLACK_TOKEN=<YOUR_SLACK_TOKEN> npm start

Things are looking good if the console prints something like:

    ** API CALL: https://slack.com/api/rtm.start
    ** BOT ID: hostbot ...attempting to connect to RTM!
    ** API CALL: https://slack.com/api/chat.postMessage

### Run locally in Docker
	docker build -t starter-node .`
	docker run --rm -it -e SLACK_TOKEN=<YOUR SLACK API TOKEN> hostbot

### Run in BeepBoop
See [BeepBop original instructions for now](https://github.com/alecl/hostbot/blob/master/BeepBoop.md)

## Acknowledgements

[botkit](https://github.com/howdyai/botkit) npm module from Howdy.ai.
[beepboop-botkit](https://github.com/BeepBoopHQ/beepboop-botkit) npm for multi-team launch. Most people using for just themselves will be fine with a simple Slack token though.

### Node Newbie Disclaimer
I've done pretty well coding in many languages over the years but Node.js **server side** Javascript was not one of them. I will improve and constructive coding style comments and pull requests are welcome.

## License

![](https://www.gnu.org/graphics/agplv3-155x51.png)

See the [LICENSE](LICENSE.md) file (AGPLv3)

