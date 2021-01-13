// Default database config
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        "adapter": "mysql",
        "host": "db-mysql-fra1-15489-do-user-2478552-0.b.db.ondigitalocean.com",
        "user": "doadmin",
        "password": "k7xnov59g22l3wz1",
        "database": "defaultdb",
        "port": "25060",
        filename: env('DATABASE_FILENAME', 'db/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
