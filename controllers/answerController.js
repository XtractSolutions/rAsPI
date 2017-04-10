'use strict'
const db = require('mysql')

/*
 * Register routes to the functions declared in this controller.
 */
exports.routes = function(app) {
  app.get('/api/answer/:id', getOne)
}

/*
 * @api [get] /answer/{id}
 * description: Get answer by id
 * parameters:
 *   - name: id
 *     in: path
 *     description: id to be fetched.
 *     required: true
 *     type: numeric
 * responses:
 *   200:
 *     description: A JSON object representing an answer
 *     schema:
 *       type: object
 *       properties:
 *         result:
 *           type: array
 *   400:
 *     description: An error string
 *     schema:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */
const getOne = function (request, response) {
  const id = request.params.id

  const mysql = db.createConnection({
    host     : process.env.QA_DB_HOST,
    user     : process.env.QA_DB_USER,
    password : process.env.QA_DB_PW,
    database : process.env.QA_DB_NAME
  })

  mysql.connect()

  mysql.query('select answer_id, answer, question_id, deleted from answer where answer_id='+id, function (error, results, fields) {
    if (error) {
      response.status(400).send({'error': error})
    } else {
      response.status(200).send({'data':results})
    }
  })
  mysql.end()
}
