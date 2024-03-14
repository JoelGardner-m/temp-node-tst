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
