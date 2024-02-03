const express = require('express')
const app = express()
const SERVER_PORT = process.env.PORT || 5000;

// http://localhost:5000/
app.get('/', function (req, res) {
  res.send('<h1>Hello My mane is Sanchit Pansal and my student id is c0865815</h1>')
})

// http://localhost:5000/hello
app.get('/hello', function (req, res) {
    res.send('<h1>Hello DevOps</h1>')
  })

app.listen(SERVER_PORT ,() => {
	console.log('Server Running at http://localhost:${SERVER_PORT}/')	
}) 

