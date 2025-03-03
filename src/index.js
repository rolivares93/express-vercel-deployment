import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send(`Express server on Vercel port ${port}`))

app.listen(port, () => console.log(`Server started on port ${port}`))
