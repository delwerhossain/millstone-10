const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const category =require('./category.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('hello drag')
})
app.get('/category', (req, res) => {
    res.send(category)
})
app.listen(port, () => {
    console.log(`Dragon is running  ${port}`);
 })