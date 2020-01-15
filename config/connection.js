const Sequelize = require('sequelize');


// const connection = new Sequelize(
module.exports = new Sequelize(
    'work_db',
    'root', 
    'password',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);
// console.log(connection)
// module.exports = connection;