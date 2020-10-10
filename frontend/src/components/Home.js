import React, {useState, useEffect} from 'react'
import api from '../utils/api'

import Sighting from './Sighting'

export default function Home() {
    const [sightings, setSightings] = useState([])

    useEffect(() => {
        api()
            .get('api/sightings')
            .then(res => {
                setSightings(res.data.message)
            })
            .catch(error => {
                console.log("API Fetch error: ", error)
            })
    }, [])
    console.log(sightings)

    return (
        <div>
            {sightings.map(sight => (
                <Sighting entry={sight} />
            ))}
        </div>
    )
}
