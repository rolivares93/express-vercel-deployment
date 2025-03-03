import express from 'express'
import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const app = express()
const httpServer = http.createServer(app)

const port = process.env.APP_PORT || 4000

app.get('/', (req, res) => res.send(`Express server on Vercel port ${port}`))

httpServer.listen(port, () => console.log(`Server started on port ${port}`))
