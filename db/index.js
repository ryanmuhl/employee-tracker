const connection = require('../config/connection');

class DB {
    constructor (connection) {
        this.connection = connection
    }

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

      findAllDepartments () {
        return this.connection.promise().query(
            "SELECT * FROM DEPARTMENT"
        )
        
      }

      
      updateEmployeeData (employeeid, roleid) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleid, employeeid]
        )
        
      }

      createRole (role) {
        return this.connection.promise().query(
          "INSERT INTO roles SET ?", role
        )
      }

      createDepartment (department) {
        return this.connection.promise().query(
          "INSERT INTO department SET ?", department
        )
      }

}



module.exports = new DB(connection)