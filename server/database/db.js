const { Sequelize } = require('sequelize');

const db = new Sequelize('express_react', 'root', 'Fran1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;