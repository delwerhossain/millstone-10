const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('hello drag')
})
app.listen(port, () => {
    console.log(`Dragon is running  ${port}`);
 })