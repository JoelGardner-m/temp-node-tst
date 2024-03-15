const { readFile } = require('fs');

console.log('started a first task')
// Check File Path
readFile('./app.js', 'utf-8', (err, result) => {
    if(err){
        console.error(err)
        return
    }else{
        console.log(result)
        console.log('completed first task')
    }


})

console.log('starting next task')