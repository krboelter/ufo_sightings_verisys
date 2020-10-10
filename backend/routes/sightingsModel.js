const db = require('../data/dbconfig')

// adds a sighting
const add = (sighting) => {
    const newSighting = db('sighting')
        .insert(sighting)

    return getOneSighting(newSighting)
}

// gets all sightings (unfiltered)
const getSightings = () => {
    return db('sightings')
        .select()
}

// finds a sighting by id
const getOneSighting = async (SightingId) => {
    const sighting = await db('sightings')
        .select()
        .where('id', id)
        .first()

    return sighting
}

module.exports = {
    add,
    getSightings
}
