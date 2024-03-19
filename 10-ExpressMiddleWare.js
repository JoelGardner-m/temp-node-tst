const express = require('express')

const app = express()

// res => middleware => res

const logger = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    next()
}

const authorize = (req,res,next) => {
    const {user} = req.query;

    if (user === 'john'){
        req.user = {name: 'john', id:3}
        console.log(req.user)
        next();
    }else{
        console.log('authorized')
        res.status(401).send('unauthorize')
    }
    
}

//Use 

// add middlewear to specific endpoints
//app.use(logger)

// adds middle wear to a base url 
//app.use('/api',logger)

//add muitple middleware functions 
//(they are excuted in order from left to right)

app.use([logger,authorize])

app.get('/',(req,res)=>{
    
    
    res.send('home')
    
})

app.get('/about',(req,res)=>{

    res.send('home')

})

app.get('/api/products',(req,res)=>{

    res.send('home')

})


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')


})