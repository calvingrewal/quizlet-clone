var express = require('express')
var path = require('path')

var app = express()

app.use('/public',express.static(path.join(__dirname,'..','/public')))

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'..','/public/index.html'))
})


app.listen(process.env.PORT || 3000, function() {
  console.log('******************LISTENING ON PORT 3000******************');
})
