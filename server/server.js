var express = require('express')
var path = require('path')

var flashcards = require('./flashcards')

var app = express()

app.use('/public',express.static(path.join(__dirname,'..','/public')))

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'..','/public/index.html'))
})

app.get('/flashcards', function(req,res) {

  switch(req.query.type) {
    case 'US_HISTORY':
      return res.json({
        'flashcards': flashcards['US_HISTORY']
      })
    case 'MATH':
      return res.json({
        'flashcards': flashcards['MATH']
      })
    default:
      return res.json({
        'flashcards': flashcards['MATH']
      })
  }
})

app.listen(process.env.PORT || 3000, function() {
  console.log('******************LISTENING ON PORT 3000******************');
})
