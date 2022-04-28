DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

use employee_db

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    names VARCHAR(50) NOT NULL

);

CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL
);