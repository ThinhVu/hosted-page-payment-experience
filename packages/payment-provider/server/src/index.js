const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('./public'))

app.get('/message-base', (req, res) => res.sendFile(path.resolve(`./public/index.html`)));
app.get('/message-base-broadcast-event-receiver', (req, res) => res.sendFile(path.resolve(`./public/index.html`)));
app.get('/webhook-base', (req, res) => res.sendFile(path.resolve(`./public/index.html`)));

const PORT = 4000
app.listen(PORT, () => {
  console.log('Payment server is running on ', PORT)
})
