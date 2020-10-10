require('dotenv').config()
const cors = require('cors')
const express = require('express')
const server = express()
const port = process.env.PORT || 5000

const sightings = require('./routes/sightings')

server.use(express.json())

// welcome message
server.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Welcome to the UFO sightings backend!"
    })
})

server.use('/api/sightings', sightings)

// default 500 error
server.use((err, req, res, next) => {
    res.status(500).json({
        message: "Internal Server Error...",
        error: err
    })
})

server.listen(port, () => {
    console.log(`***Server listening at http://localhost:${port}***`)
})
