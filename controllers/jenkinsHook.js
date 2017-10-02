'use strict'
const execSync = require('child_process').execSync

/*
 * Register routes to the functions declared in this controller.
 */

exports.routes = function(app) {
  app.post('/api/jenkins', post)
}

/*
 * @api [post] /jenkins
 * description: Webook url for jenkins to post build events to.
 * parameters:
 *   - name: command
 *     in: query
 *     description: Command to execute on the system.
 *     required: true
 *     type: string
 *     enum:
 *       - Shutdown
 *       - Reboot
 * responses:
 *   200:
 *     description: A string indicating the system status.
 *     schema:
 *       type: string
 *   400:
 *     description: An error string
 *     schema:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */
exports.post = function (request, response) {
  Url = process.env.SlackWebhookUrl
  message = JSON.stringify(request.body)

  const request = new Request(Url, {
    method: 'POST',
    body: message,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
}
