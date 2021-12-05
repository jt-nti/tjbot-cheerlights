const mqtt = require('mqtt')
const TJBot = require('tjbot').default;

const mqttClient = mqtt.connect('mqtt://mqtt.cheerlights.com')

const tj = new TJBot();
tj.initialize([TJBot.HARDWARE.LED_NEOPIXEL]);

var previousColour = ''

mqttClient.on('connect', function () {
  mqttClient.subscribe('cheerlightsRGB', function (err) {
    if (!err) {
      console.log('Connected')
    }
  })
})
   
mqttClient.on('message', function (_topic, message) {
  var nextColour = message.toString()
  console.log(nextColour)

  if (nextColour != previousColour) {
    previousColour = nextColour

    tj.shine(nextColour)
    console.log('updated')
  }
})

function handle(signal) {
  console.log(`Handling ${signal}`);
  tj.shine('off')
  mqttClient.end(true)
  process.exit(0)
}

process.on('SIGTERM', handle)
process.on('SIGINT', handle)
process.on('uncaughtException', handle)
