//const mysql = require('mysql');
const inquirer = require('inquirer');
/*const connection = require('./db/connection');*/
/*const cTable = require('console.table');
const validate = require('./javascript/validate');*/
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


