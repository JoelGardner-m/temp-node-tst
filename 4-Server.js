const http = require('http')


const sever = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end(`${TEXT}`)
    
    }
    else if(req.url === '/about'){
        res.end('About')

    }else{

    res.end(`
    <h1>OOPS!</h1>
    <p> We cannot find the page you are looking</p>
    <a href = "/">back to home</a>
    `)
    }
    //res.end()


})

sever.listen(5000)

/*
const http = require('http')
const {readFileSync, writeFileSync } = require('fs')

//C:\Users\ttask\OneDrive\Documents\web project\calculator
const Homepage = readFileSync('../web project/calculator/index.html','utf-8')
const HomepageCSS = readFileSync('../web project/calculator/Web style.css','utf-8')
const HomepageLogic = readFileSync('../web project/calculator/Web style.css','utf-8')

const server = http.createServer((req, res) =>{
    const url = req.url
    console.log(url)
    if (url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(Homepage)
        res.end()

    }
    else if (url === '/Web%20style.css'){
        res.writeHead(200, { 'content-type': 'style/css' })
        res.write(HomepageCSS)
        res.end()
    }else if (url === '/index.js'){
        res.writeHead(200, { 'content-type': 'style/css' })
        res.write(HomepageLogic)
        res.end()
    }else{  
        res.writeHead(404, { 'content-type': 'text/javascript' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)

*/
