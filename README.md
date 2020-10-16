# UFO SIGHTINGS
Thank you for visiting the UFO Sightings services.

## Table of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project contains both the front end and backend for the Verisys Interview challenge - UFO Sightings

## Technologies
Frontend:
* React

Backend:
* NodeJS
* Express
* PostgreSQL

## Setup
To start the backend server:
* cd into /backend
* in the cli, type `npm run server`

OR

With Docker:
* In CLI: [sudo] docker-compose up -d
* In Browser: localhost:3001/api/sightings

Adding a .csv file:
* ... [unfinished]

## API
Adding a sighting:
* format: {
    sighting_date: (date: yyyy-mm-dd 00:00:00 +0000),
    shape: (string),
    duration: (integer),
    comments: (string),
    city: (string),
    state: (string),
    latitude: (string),
    longitude: (string)
}

Adding a csv file:
* cd into backend, start the server
* file upload format (via cli): `node utils/csv_parse.js [/path/to/csv/file] http://localhost:3001/api/sightings`
* at the moment 80,000 sightings is too many for the system

Schema Description:
* sighting_date - required, default: current date
* shape - required, default: ''
* duration - required, default: 0
* comments - required, default: ''
* city - required, default: ''
* state - required, default: ''
* latitude - required, default: ''
* longitude - required, default: ''

Challenges:
* Time spend on general bug fixes
* Figuring out how to get the CSV file into the DB
    (my thoughts were to loop through each line and make it it's own array, knexJS doesn't allow you to add files directly)
* Getting Docker to communicate with the "doldroyd/ufo-sighting:firstload" image

Assumptions:
* None

Next Steps:
* Getting CSV file to load into project
* Once data is in place, filtering through the data to meet the 750 mile area criteria
* Add PUT/DELETE routes

Feedback:
* None (This project was very challenging)

Questions:
* None
