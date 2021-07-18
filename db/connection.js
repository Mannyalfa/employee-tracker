const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Bocho@1964',
    database: 'employees',
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;