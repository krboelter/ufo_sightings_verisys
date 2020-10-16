const fs = require('fs')
const csv = require('csv-parser')
const axios = require('axios')

// add an entire file
// must be local path to csv file

// /home/kennethboelter/Downloads/ufo_hotspots_v2/ufo_sightings.csv
function parseCsv(file) {
    const results = []

    fs.createReadStream(file)
        .pipe(csv(['sighting_date', 'shape', 'duration', 'diration_minutes', 'comments', 'location']))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results)
            console.log(`Number of records parsed: ${results.length}`)
        })
    return results
}

if (process.argv.length === 4) {
    const file = process.argv[2]
    const website = process.argv[3]

    results = parseCsv(file)

    axios.post(`${website}`, results)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err, 'Axios error')
        })

} else {
    console.log('format: node utils/csv_parse [path/to/csv/file] [http://website/some/endpoint]')
}
