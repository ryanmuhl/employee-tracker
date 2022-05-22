INSERT INTO department (names)
VALUES
("Sales"),
("Engineering"),
("Engineering"),
("Finance"),
("Finance"),
("Legal"),
("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 3),
("Account Manager", 160000, 4),
("Accountant", 125000, 5),
("Manager", 250000, 6),
("Lawyer", 190000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Ryan", "Uhl", 1, 101 ),
("Rebecca", "Uhl", 2, 102 ),
("Ted", "Lasso", 3, 103 ),
("Luke", "Skywalker", 4, 104),
("Michael", "Scott", 5, 105),
("Obiwan", "Kenobi", 6, 106),
("Sean", "Spenser", 7, 107 );