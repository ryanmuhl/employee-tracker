const connection = require('../config/connection');

class DB {
    constructor (connection) {
        this.connection = connection
    }

    findAllEmployees () {
      return this.connection.promise().query(
          "SELECT * FROM EMPLOYEE"
      )
      
    }

    findAllRoles () {
        return this.connection.promise().query(
            "SELECT * FROM ROLES"
        )
        
      }

      findAllDepartments () {
        return this.connection.promise().query(
            "SELECT * FROM DEPARTMENT"
        )
        
      }

      
      addEmployee () {
        return this.connection.promise().query(
            "INSERT INTO employee SET"
        )
        
      }
      

}



module.exports = new DB(connection)