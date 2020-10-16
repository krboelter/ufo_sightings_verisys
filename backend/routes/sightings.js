const express = require('express')
const router = express.Router()
const sightingsModel = require('./sightingsModel')
const parseCsv = require('../utils/csv_parse')

// add a new sighting
router.post('/', async (req, res, next) => {
    try {
        const newSighting = req.body
        const added = await sightingsModel.add(newSighting)

        res.status(201).json({
            message: "Added Sighting",
            sighting: added
        })
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

// gets all sightings (not filtered)
router.get('/', async (req, res, next) => {
    try {
        const sightings = await sightingsModel.getSightings()

        res.status(200).json({
            message: sightings
        })
    } catch(err) {
        next(err)
    }
})

module.exports = router
