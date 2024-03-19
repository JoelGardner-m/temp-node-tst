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

/*

const express = require('express');
const app = express();
const path = require('path')
const homePage = './New website/index.html'
const style = './New website/styles.css'
const Site = './New website'
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use

app.use(express.static('./public'))

//path, 

app.get('/styles.css', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, style))
    console.log(req.url)
})


app.get('/about',(req,res) => {
    console.log('using seraching for info')
    res.status(200).send('bob')
    

})

app.get('/',(req,res) => {
    console.log('using seraching for info')
    res.status(200).sendFile(path.resolve(__dirname, homePage))
    
    console.log(req.url)
})

app.all('*', (req,res)=>{
    res.status(404).send('<h1> Not able to find data </h1>')

})

app.listen(5000, () => {
    console.log('server is listening on port 5000')


})
*/


