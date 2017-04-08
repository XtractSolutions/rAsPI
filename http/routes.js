'use strict'
// import controllers
const questionController = require('./controllers/questionController')
const answerController = require('./controllers/answerController')

// export the routing function for use by server.js
exports.routes = function (app) {
  /**
  * Question API routes
  */
  // app.get('/question', questionController.get)
  // app.get('/question/:id', questionController.getOne)
  // app.post('/question', questionController.post)
  // app.post('/question/_search', questionController.search)
  // app.put('/question/:id', questionController.put)
  // app.delete('/question/:id', questionController.delete)

  /**
  * Answer API routes
  */
  app.get('/answer/:id', answerController.getOne)
  //app.delete('/answer/:id', answerController.delete)
}
