import express from 'express'
const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Express server on Vercel')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
