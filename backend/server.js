require('dotenv').config()
const cors = require('cors')
const express = require('express')
const server = express()
const port = process.env.PORT || 3001

const sightings = require('./routes/sightings')

server.use(cors())
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
    console.log(err)

    res.status(500).json({
        message: "Internal Server Error...",
        error: err
    })
})

server.listen(port, () => {
    console.log(`\n***Server listening at http://localhost:${port}***\n`)
})
