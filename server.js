var Botkit = require('botkit')
var beepboop = require('beepboop')
var controller = Botkit.slackbot({ debug: false })

var run = false
var data = {}

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

controller.hears('stat', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, Object.key(data).length())
})

// just say something
controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'You very smart my friend')
})

function start () {
  if (run) {
    for (var i = 0; i < 1000; i++) {
      data[Date.now()] = 'mXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCs,mXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCs,mXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCs,mXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCs,mXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCs,mXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCsmXu07WJcjub8V4GlpXCs'
    }
    setTimeout(start, 1)
  } else {
    data = {}
  }
}
