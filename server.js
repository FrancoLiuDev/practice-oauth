const express = require('express')
const path = require('path')
 
 
const app = express()
const https = require('https')
const fs = require('fs')
 
 
//console.log('appConfig', appConfig)

app.use('/', express.static(path.join(__dirname, 'dist')))
app.listen(80, async function () {
  console.log('Example app listening on port 80!')
})

const options = {
  key: fs.readFileSync('ssl/privateKey.key'),
  cert: fs.readFileSync('ssl/cer.pem'),
  ca: [fs.readFileSync('ssl/ca.pem')]
}
https.createServer(options, app).listen(443)
