require("dotenv").config({path:__dirname+'/../.env'});
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json());

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, console.log(`Server listening on port ${SERVER_PORT}.`))
        console.log(`db connected.`)
    })
    .catch(err => {
        console.log(err)
    })


app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.postProduct)