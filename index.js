// const express = require('express')
// const app = express()

const http = require('http')
const routes = require('./routes.js')

http
.createServer(function (req, res) {
    let txt = routes(req, res)
    res.end(txt)
})
.listen(3000, function () {
    console.log('ya estoy escuchando...')
})
