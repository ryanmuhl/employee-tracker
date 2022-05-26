const connection = require('../config/connection');

class DB {
    constructor (connection) {
        this.connection = connection
    }

    //Method to find all employees and join columns from roles and department
    findAllEmployees () {
      return this.connection.promise().query(
        `SELECT 
        employee.id AS employee_id, 
        first_name, 
        last_name,
        title AS employee_title,
        department.names AS department_name,
        salary AS employee_salary,
        manager_id        
        FROM roles
        JOIN employee
        ON roles.id=employee.role_id
        JOIN department
        ON roles.department_id=department.id;`
      )
      
    }

    //Method to find all roles and join columns from roles and department
    findAllRoles () {
        return this.connection.promise().query(
            `SELECT 
            roles.id AS role_id, 
            title AS role_title, 
            salary AS role_salary, 
            names AS department_names             
            FROM roles
            JOIN department
            ON roles.department_id=department.id `
        )
        
      }

      //Method to find all departments
      findAllDepartments () {
        return this.connection.promise().query(
            "SELECT * FROM DEPARTMENT"
        )
        
      }

      //Method to update employee role 
      updateEmployeeData (roleid, employeeid ) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleid, employeeid]
        )
        
      }

      //Method to create an employee role
      createRole (role) {
        return this.connection.promise().query(
          "INSERT INTO roles SET ?", role
        )
      }

      //Method to create a department
      createDepartment (department) {
        return this.connection.promise().query(
          "INSERT INTO department SET ?", department
        )
      }

}



module.exports = new DB(connection)