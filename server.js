'use strict'

const swaggerRoutes = require('./docs/swaggerRoutes').routes
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()

require('source-dot-env')()

// initialize the swagger documentation routes
swaggerRoutes(app)

// Require all all controllers and initialize their routes
const controllerPath = require("path").join(__dirname, "controllers")
require("fs").readdirSync(controllerPath).forEach(function (file) {
  // Join the path to the file name
  file = path.join(controllerPath, file)
  console.log('loading ' + file + '...')
  let routes = require(file).routes
  routes(app)
})

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

// export the path to the script directory for use elsewhere in the app
global.scriptDir = path.join(__dirname, 'shell_scripts')

// Tell the server to listen to the port specified in the .env file.
app.listen(process.env.PORT)
console.log('Listening on port http://localhost:' + process.env.PORT + '...')
