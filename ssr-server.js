const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const coinsList = require('./stubs/coins/coins-list.json');
const currenciesList = require('./stubs/currencies/currencies-list.json');

app.prepare()
  .then(() => {
    const server = express()

    server.get('/simple/supported_vs_currencies', (req, res) => {
      res.send(currenciesList);
    })

    server.get('/coins/list', (req, res) => {
      res.send(coinsList);
    })
    server.get('/*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })