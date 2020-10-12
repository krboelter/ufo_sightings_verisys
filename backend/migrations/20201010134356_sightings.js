exports.up = async function(knex) {
    await knex.schema.createTable('sightings', table => {
        table.increments()
        table.date('sighting_date')
            .notNullable()
            .defaultTo(knex.fn.now())
        table.string('shape')
            .notNullable()
            .defaultTo('')
        table.integer('duration')
            .notNullable()
            .defaultTo(0)
        table.string('comments')
            .notNullable()
            .defaultTo('')
        table.string('city')
            .notNullable()
            .defaultTo('')
        table.string('state')
            .notNullable()
            .defaultTo('')
        table.string('latitude')
            .notNullable()
            .defaultTo('')
        table.string('longitude')
            .notNullable()
            .defaultTo('')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists
};
