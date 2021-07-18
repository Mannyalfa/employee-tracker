const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('./db/connection');
const figlet = require('figlet');
const chalk = require('chalk');


figlet ('EMPLOYEE TRACKER', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log('                                                                    '+chalk.whiteBright('a project by Manny Alfaro'));
});

// Create Connection To Database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employees'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('CONNECTION SUCCESSFUL!');
    promptUser();
});

const promptUser = () => {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Roles",
            "View Departments",
            "Add Employee",
            "Add Role",
            "Add Department",
            "Update Employee Role",
            "Exit"]
    })
        .then(function ({ task }) {
            switch (task) {
                case "View Employees":
                    queryTable("employee", `SELECT * FROM employee`);
                    break;
                case "Add Employee":
                    addEmployee();
                    break;

                case "View Departments":
                    queryTable("department", `SELECT * from department`)
                    break;
                case "Add Department":
                    addDepartment();
                    break;

                case "View Roles":
                    queryTable("role", `SELECT * from role`);
                    break;
                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    break;

                case "End":

                    connection.end();
                    break;
            }
        });
}

// display tables
function queryTable(tableName, queryString) {

    let queryForTable = queryString

    connection.query(queryForTable, (err, res) => {
        if (err) throw err;

        
        console.table(res);
        console.log("Displaying" + tableName)
        
        promptUser()


