const express = require('express')

const app = express()




const people = [
    { id: 12345, name: "Alice" },
    { id: 23456, name: "Bob" },
    { id: 34567, name: "Charlie" },
    { id: 45678, name: "David" },
    { id: 56789, name: "Emma" },
    { id: 67890, name: "Frank" },
    { id: 78901, name: "Grace" },
    { id: 89012, name: "Henry" },
    { id: 90123, name: "Ivy" },
    { id: 10111, name: "Jack" }
  ];

app.use(express.static('./L'))

// Get
app.get('/api/people', (req,res) => {
    res.status(200).json({success:true, data:people})


  })




app.listen(5000, () => {
    console.log('Server is listening on port 5000....')


})