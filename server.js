var Botkit = require('botkit')
var beepboop = require('beepboop')
var controller = Botkit.slackbot({ debug: false })

var run = false
var data = []
var i = 0

beepboop.start(controller, {})

controller.hears('start', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'Here goes')
  run = true
  start()
})

controller.hears('stop', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'stopping')
  run = false
})

// just say something
controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'You very smart my friend')
})

function start () {
  if (run) {
    data[i] = 'mXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCs'
    i = i + 1
    setTimeout(start, 1)
  } else {
    data = []
    i = 0
  }
}
