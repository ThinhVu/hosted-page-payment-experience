const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('./public'))

const PORT = 4001
app.listen(PORT, () => {
  console.log('Payment server is running on ', PORT)
})
