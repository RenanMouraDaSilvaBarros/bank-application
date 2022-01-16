const express = require('express')

const server = express()

server.use(express.json())

server.listen(33333, ()=>{
    console.log('server running')
})