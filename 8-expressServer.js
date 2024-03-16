const express = require('express');
const app = express();
const {readFileSync, writeFileSync } = require('fs')
const Homepage = readFileSync('./New website/index.html','utf-8')

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use

//path, 
app.get('/',(req,res) => {
    console.log('using seraching for info')
    res.status(200).send(Homepage)

})

app.get('/about',(req,res) => {
    console.log('using seraching for info')
    res.status(200).send('about page')

})

app.all('*', (req,res)=>{
    res.status(404).send('<h1> Not able to find data </h1>')

})

app.listen(5000, () => {
    console.log('server is listening on port 5000')


})

