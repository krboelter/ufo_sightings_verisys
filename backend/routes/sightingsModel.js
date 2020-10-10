const db = require('../data/dbconfig')

// adds a sighting
const add = async (sighting) => {
    const [newSighting] = await db('sightings')
        .insert(sighting)

    console.log(newSighting, "HERE IS THE SIGHTING")

    return getOneSighting(newSighting)
}

// gets all sightings (unfiltered)
const getSightings = () => {
    return db('sightings')
        .select()
}

// finds a sighting by id
const getOneSighting = async (id) => {
    const sighting = await db('sightings')
        .select()
        .where({ id })
        .first()

    return sighting
}

module.exports = {
    add,
    getSightings
}
