const connection = require("./connection.js");
const cTable = require('console.table');

class dbQuery {
    constructor(connection) {
        this.connection = connection;
    }
    //Employee (get, add, update)
    getAllEmployees() {
        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, dept_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee  LEFT JOIN employee manager on manager.id = employee.manager_id INNER JOIN role ON (role.id = employee.role_id) INNER JOIN department ON (department.id = role.department_id) ORDER BY employee.id;");
    }
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

    updateEmployee() {
        return this.connection.query("UPDATE employee SET role_id = role_id WHERE first_name = name");
    }

    //Role. (get, add)
    viewAllRoles() {
        return this.connection.query("SELECT id, title, salary, department_id AS role FROM role");
    }

    addRole(newRole) {
        return this.connection.query("INSERT INTO role SET ?", newRole);
    }

    //Department (get, add)
    viewAllDepartments() {
        return this.connection.query("SELECT * FROM department");
    }

    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }

    updateEmployeeRole(employeeId, newRoleId) {
        console.log("inside query");
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [newRoleId, employeeId]);
    }

    removeEmployee(id) {
        return this.connection.query("DELETE FROM employee WHERE id = ?", id);
    }
    removeRole(id) {
        return this.connection.query("DELETE FROM role WHERE id = ?", id);
    }
    removeDepartment(id) {
        return this.connection.query("DELETE FROM department WHERE id = ?", id);
    }
}

module.exports = new dbQuery(connection);