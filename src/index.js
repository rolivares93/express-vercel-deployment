import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import { apolloServer } from './apollo/server.js'
import { startStandaloneServer } from '@apollo/server/standalone'

dotenv.config()

// async function startServer() {
//   const app = express()
//   const httpServer = http.createServer(app)
//   const port = process.env.APP_PORT || 4000

//   await apolloServer.start()
//   apolloServer.applyMiddleware({ app })

//   app.get('/', (req, res) => res.send(`Express server on Vercel port ${port}`))

//   httpServer.listen(port, () => console.log(`Server started on port ${port}`))
// }

// startServer()

const port = process.env.APP_PORT || 4000

const {url} = await startStandaloneServer(apolloServer, {
  listen: {port}
})

console.log(`🚀  Server ready at: ${url}`);

