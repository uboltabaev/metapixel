const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

const PixilID = "401657213713842"

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Facebook Pixel', 
        message: 'Facebook Pixel',
        PixilID
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})