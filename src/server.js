'use strict'

const Hapi = require('hapi')

// configuration object
const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0'//0.0.0.0 instead of "localhost" for docker purposes
})

// adding a route
server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'This is the response from the root path';
  }
})

// adding a route with query param
server.route({
  method:'GET',
  path:'/{name}',
  handler: (request, h) => {
    return 'This is the response from the /{name} path and the value is ' +
      encodeURIComponent(request.params.name) + '!'
  }
})

// start server and log that is running
const init = async () => {
  await server.start()
  console.log(`Server running at ${server.info.uri}`)
}

// in case of an unhandled Rejection process will exit
process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
