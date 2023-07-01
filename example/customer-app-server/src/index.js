const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./public'))

const PORT = 4001
app.listen(PORT, () => console.log(`Customer server is running on http://localhost:${PORT}`))
