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
        table.string('duration_minutes')
            .notNullable()
            .defaultTo('')
        table.string('comments')
            .notNullable()
            .defaultTo('')
        table.string('location')
            .notNullable()
            .defaultTo('')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists
};
