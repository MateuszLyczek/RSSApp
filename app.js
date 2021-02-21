const express = require('express')
const app = express()
app.get('/test', (request, respond) => {
    respond.send('Hello Node!')
})

app.use(express.static(__dirname + '/public'))
app.listen(3000)