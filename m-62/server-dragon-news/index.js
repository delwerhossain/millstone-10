const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const category =require('./category.json')
const news =require('./news.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('hello drag')
})
app.get('/category', (req, res) => {
    res.send(category)
})
app.get('/news', (req, res) => {
    res.send(news)
 })
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(news => news._id === id)
    res.send(selectedNews)
 })
app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (id === 0) {
        res.send(news)
    }
    else {
        const selectedByCategory = news.filter(news => parseInt(news.category_id) === id)
        res.send(selectedByCategory)
    }
 })
app.listen(port, () => {
    console.log(`Dragon is running  ${port}`);
 })