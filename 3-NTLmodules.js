//modual are small bits of code that allows us to break up code
// common js module are acessable every
// every node is module 

//local 
const Cold = 'cold'

// sharded

const john = 'john'
const jim = 'jim'

module.exports = {john, jim}

//const os = require('os');
// destructering const{info info want to get } = require('os');
const os = require('os')
const user = os.userInfo()


console.log(user)

// method 
console.log(os.uptime())

const path = require('path')

console.log(path.sep);

// FS module sync 
/* 
const {readFileSync, writeFileSync} = require('fs')

const TEXT = readFileSync('./Text.txt', 'utf8')
writeFileSync('./TEXT.txt', 'Hello', {flag: 'a'})

writeFileSync('./TEXT.txt', 'Hello', {flag: 'a'})
*/
// FS module Async 
/*
const {readFile, writeFile} = require('fs');

readFile('./app.js','utf8', (err,result)=>{
    if (err){
        console.error(err)

    }else{
        console.log(result)

    }


})
console.log('bob');
*/