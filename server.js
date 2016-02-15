var Botkit = require('botkit')
var beepboop = require('beepboop')
var controller = Botkit.slackbot({ debug: true })

beepboop.start(controller, {})

controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'You smart my friend')
})
