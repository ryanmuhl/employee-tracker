INSERT INTO department (names)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 3),
("Lawer", 160000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Ryan", "Uhl", 1, 101 ),
("Rebecca", "Uhl", 2, 102 ),
("Ted", "Lasso", 3, 103 ),
("Luke", "Skywalker", 4, 104);

