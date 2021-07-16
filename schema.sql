DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees; 

  CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR (30) NOT NULL
  );

  CREATE TABLE role (
    id INTEGER AUTO_INCREMENT FOREIGN KEY,
    title VARCHAR (30) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
  );
CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT FOREIGN KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
  );