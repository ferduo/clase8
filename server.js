const express = require('express')
const api = require('./routes/api')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(api)
app.use(express.static('public'));

PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`escuchando desde ${server.address().port} - http://localhost:${PORT}`)
})
server.on('error', error => console.log('ERROR', error))