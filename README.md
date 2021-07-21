# employee-tracker

## Table of Contents

1. [Description](#description)

2. [Installation](#installation)

3. [Usage](#usage)

4. [License](#license)

5. [Image](#Image)

6. [Languages/Applications](#languages-applications)

7. [Repository URL](#repository-url)

8. [Test-Demo](#test-demo)

9. [Website](#website)

10. [Credits](#credits)

## Description
A CLI applicaiton for building and maintaining an employee data base.

GIVEN a command-line application that accepts user input

WHEN I start the application

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments

THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department

THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee

THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

WHEN I choose to update an employee role

THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation
run mpm init --y

npm install express, sequelize, mysql2, source db/schema.sql, USE employee node server.js

## License
MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Images
![screenshot](https://github.com/Mannyalfa/employee-tracker/blob/main/images/db_schema.png)

![screenshot](https://github.com/Mannyalfa/employee-tracker/blob/main/images/screenshot.png)

## Languages/Applications
JavaScript, Node.js, Express.js, MYSQL, Inquirer

## Repository URL
https://github.com/Mannyalfa/employee-tracker

## Walkthrough Video
https://drive.google.com/file/d/1bk4baqZGo7jtPnc4NYOimf1uGevT8g8d/view?usp=sharing
    
## Credits
Manny Alfaro

UCF-VIRT-BO-FSF-PT-04-2021-U-B

### If you have any additional questions regarding this project, please contact: mannyalfa@gmail.com