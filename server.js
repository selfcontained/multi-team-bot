var Botkit = require('botkit')
var beepboop = require('beepboop')
var controller = Botkit.slackbot({ debug: false })

var run = false

beepboop.start(controller, {})

// just say something
controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'You very smart my friend')
})

controller.hears('start', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'Here goes')
  run = true
  start()
})

controller.hears('stop', 'direct_message,direct_mention', function (bot, message) {
  bot.reply(message, 'stopping')
  run = false
})

function start () {
  if (run) {
    var i
    var fib = []

    fib[0] = 0
    fib[1] = 1
    for (i = 2; i <= 1000; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1]
    }
    setTimeout(start, 10)
  }
}
