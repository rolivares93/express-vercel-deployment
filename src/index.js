import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import http from 'http'

dotenv.config()

const app = express()
const httpServer = http.createServer(app)
const port = process.env.APP_PORT || 4000

app.use(cors())

app.get('/', (req, res) => res.send(`Express server on Vercel port ${port}`))

httpServer.listen(port, () => console.log(`Server started on port ${port}`))
