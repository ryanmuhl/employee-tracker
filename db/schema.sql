--Drops database if it exists then creates new employee_db database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

use employee_db

--Department table with Columns: ID, Names
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(50) NOT NULL

);

--Roles table with Columns: ID, title, salary, department_id
CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

--Employee table with Columns: ID, first_name, last_name, role_id, manager_id
CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);

--to create db/table you must log into MYSQL and type SOURCE db/schema.sql