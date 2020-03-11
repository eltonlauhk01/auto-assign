//  now.js
var { serverless } = require('@chadfawcett/probot-serverless-now')
const appFn = require('./src')
module.exports = serverless(appFn)
