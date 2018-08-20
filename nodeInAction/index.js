const server = require('./http.js')
const router = require('./router')

server.start(router.route)