const express = require('express')
const app = express()

//middleware
app.use(express.static(__dirname + '/public'))

//routes
app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/works', function(req, res, next){
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/about', function(req, res, next){
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(3000)