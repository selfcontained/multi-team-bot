var Botkit = require('botkit')
var beepboop = require('beepboop')
var controller = Botkit.slackbot({ debug: false })

var run = false
var fib = [0, 1]
var i = 2

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
    i = i + 1
    fib[i] = fib[i - 2] + fib[i - 1]
    setTimeout(start, 10)
  } else {
    fib = [0, 1]
    i = 2
  }
}
