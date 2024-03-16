const http = require('http')


const sever = http.createServer((req, res) =>{
    console.log('bob')


})

sever.listen(5000)
