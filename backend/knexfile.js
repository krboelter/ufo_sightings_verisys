// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    connection: {
      filename: './data/sightings.db3'
    }
  },
    migrations: {
      tableName: './data/migrations'
  },
  production: {
    client: 'pg',
    connection: {
      database: './data/sightings.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      filename: './data/migrations'
    }
  }

};
