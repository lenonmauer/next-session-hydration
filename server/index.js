const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { authMiddleware } = require('./utils')

app.prepare().then(() => {
  const server = express()

  server.get('/', authMiddleware(), async (req, res) => {
    console.log('get /')
    return handle(req, res)
  })

  server.get('/test', authMiddleware(), async (req, res) => {
    console.log('get /test')
    return handle(req, res)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
