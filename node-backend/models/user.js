const Sequelize = require('sequelize'); /* import sequelize object */
const db = require('../utils/database') /* import db connection */


/* table creation */
const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    age: Sequelize.INTEGER

}
)
module.exports = User;