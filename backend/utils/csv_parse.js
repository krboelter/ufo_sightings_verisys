const fs = require('fs')
const csv = require('csv-parser')
const axios = require('axios')

// add an entire file
// must be local path to csv file

// /home/kennethboelter/Downloads/ufo_hotspots_v2/ufo_sightings.csv

if (process.argv.length > 3) {
    const file = process.argv[2]
    const website = process.argv[3]

    const results = []
    fs.createReadStream(file)
        .pipe(csv(['sighting_date', 'shape', 'duration', 'duration_minutes', 'comments', 'location']))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results)
            axios({
                method: 'post',
                url: `${website}`,
                data: results
            })
            .then(res => {
                console.log(res.data)
                console.log(`Number of records uploaded: ${results.length}`)
            })
            .catch(err => {
                console.log("err")
            })

        })


} else {
    console.log('format: node utils/csv_parse [path/to/csv/file] [http://website/some/endpoint]')
}
