var Botkit = require('botkit')
var beepboop = require('beepboop')
var controller = Botkit.slackbot({ debug: false })

beepboop.start(controller, {})

// just say something
controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'You very smart my friend')
})

