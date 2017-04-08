'use strict'

const swaggerRoutes = require('./docs/swaggerRoutes').routes
const routes = require('./http/routes').routes
const bodyParser = require('body-parser')
const express = require('express')
var mysql = require('mysql')
const path = require('path')
const app = express()

GLOBAL.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.MYSQL_PW,
  database : 'slackbot'
});

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

// export the path to the script directory for use elsewhere in the app
GLOBAL.scriptDir = path.join(__dirname, 'shell_scripts')

// initialize the routing function (see http/routes.js)
routes(app)
// initialize the swagger documentation routes
swaggerRoutes(app)

// Tell the server to listen to port 3000
app.listen(3000)
console.log('Listening on port http://localhost:3000...')
