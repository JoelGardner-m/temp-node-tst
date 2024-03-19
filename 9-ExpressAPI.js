const express = require('express')
const app = express()
const {products} = require('./Products/Data')

app.get('/', (req,res) => {
    //res.status(200).json([{name: 'bob'},{name: 'jim'}])
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
    

})

app.get('/api/products', (req,res) =>{
    const newProducts = products.map((product) =>{
        const {id,name} = product
        return {id,name}
    })
    res.json(newProducts)


})

// simple params search
app.get(`/api/products/:productID`, (req,res) =>{
    const {productID} = req.params;
    
    const singleProduct = products.find((products)=> products.id === Number(productID))
    
    if (!singleProduct){
        return res.status(404).send('product Dose Not Exist')

    }
    
    res.json(singleProduct)


})

//complex params search

app.get('/api/v1/query', (req, res)=>{
    //console.log(req)
    const {search, limit} = req.query
    let sortProducts = [...products]
    
    if (search) {
        sortProducts = sortProducts.filter((product)=>{
            return product.name.startsWith(search)
           
        })
    }
    if (limit) {
        sortProducts = sortProducts.slice(0,Number(limit))
    }
    if (sortProducts.length < 1){
        //res.status(200).send('no products match your source')
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortProducts)
    
})


app.listen(5000, () => {
    console.log('server is listen on port 5000....')
})