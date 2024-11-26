require('dotenv').config();
const express = require('express')
const app = express()
// const port = 4000
const port = process.env.PORT;

// console.log(process.env.PORT);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/myApp', (req, res) => {
    res.send('your app is running')
})


app.get('/myApp1', (req, res) => {
    res.send('<h1>Welcome to the App Ruchi</h1>')
})

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`)
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})