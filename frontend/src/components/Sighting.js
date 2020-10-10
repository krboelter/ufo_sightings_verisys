import React from 'react'
import styled from 'styled-components'

export default function Sighting(props) {
    return (
        <Card>
            <p>Sighting Date: {props.entry.sighting_date}</p>
            <p>Shape: {props.entry.shape}</p>
            <p>Duration: {props.entry.duratione}</p>
            <p>Comments: {props.entry.comments}</p>
            <p>City: {props.entry.city}</p>
            <p>State: {props.entry.state}</p>
            <p>Latitude: {props.entry.latitude}</p>
            <p>Longitude: {props.entry.longitude}</p>
        </Card>
    )
}

const Card = styled.div`
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
    width: 33%;
    background-color: tan;
`
