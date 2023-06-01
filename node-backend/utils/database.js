/*  connection postgress to db */

const Sequelize = require('sequelize');

/* intantiate sequelize */
const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        /* connection db to app in container */
        host: process.env.PG_HOST,
        dialect: 'postgres'
    }
);

module.exports = sequelize;