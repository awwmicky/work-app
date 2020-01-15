const Sequelize = require('sequelize');
const connection = require('../config/connection.js');

/* edit table-name (db) */

// const db = connection.define(
module.exports = connection.define(
    'work',
    {
        title: {
            type: Sequelize.STRING,
        },
        technologies: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        budget: {
            type: Sequelize.INTEGER,
        },
        contact_email: {
            type: Sequelize.STRING,
        }
    }
);
// console.log(db)
// module.exports = db