const express = require('express')
const {addDays} = require('date-fns')
const app = express()
app.get('/', (request, response) => {
  let date = new Date()
  let hundredDays = addDays(date, 100)
  response.send(
    `${hundredDays.getDate()}/${
      hundredDays.getMonth() + 1
    }/${hundredDays.getFullYear()}`,
  )
})
app.listen(3000)
module.exports = app
