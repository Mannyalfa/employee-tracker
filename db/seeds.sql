USE employees;

INSERT INTO department (dept_name) VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role (title, salary, department_id) VALUES
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, id, role_id) VALUES
    ("John", "Doe", 1, 1),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez", 3, 2),
    ("Kevin", "Tupik", 4, 3),
    ("Malia", "Brown", 6, 4),
    ("Sarah", "Lourd", 7, 4),
    ("Tom", "Allen", 8, 4);
    ("Christian", "Eckenrode", 9, 2);
    ("Tanner", "Galal", 10, 2);


UPDATE employee SET manager_id = 3 WHERE id = 1;
UPDATE employee SET manager_id = 1 WHERE id = 2;
UPDATE employee SET manager_id = 3 WHERE id= 4;
UPDATE employee SET manager_id = 7 WHERE id= 8;
UPDATE employee SET manager_id = 7 WHERE id= 9;
UPDATE employee SET manager_id = 3 WHERE id= 10;