exports.up = async function(knex) {
    await knex.schema.createTable('sightings', table => {
        table.increments()
        table.date('sighting_date')
            .notNullable()
        table.string('shape')
        table.integer('duration')
            .notNullable()
        table.string('comments')
        table.string('city')
        table.string('state')
        table.integer('latitude')
            .notNullable()
        table.integer('longitude')
            .notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists
};
