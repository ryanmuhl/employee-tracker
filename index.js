
const db = require('./db');
const inquirer = require('inquirer');
const cTable = require('console.table');


    inquirer.prompt([
       {
           type: "list",
           name: "choice",
           message: "Select Employee Information",
           choices: [
               {
                   name: "view all employees",
                   value: "VIEWEMPLOYEES",
               },
               {
                   name: "view all roles",
                   value: "VIEWALLROLES",

               },
               {
                name: "view all departments",
                value: "VIEWALLDEPARTMENTS",

            },
            {
                name: "add employee",
                value: "ADDEMPLOYEE"
            }
           ]

       } 
    ])
    .then(res => {
        let choice = res.choice
        switch(choice) {
            case "VIEWEMPLOYEES":
            viewEmployees ();
            break;
            case "VIEWALLROLES":
            viewEmployeesRoles ();
            break;
            case "VIEWALLDEPARTMENTS":
            viewEmployeesDepartments ();
            break;
            case "ADDEMPLOYEE": 
            addEmployeeTable()

        }
    })

    
   
function viewEmployees () {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows
        console.table(employees)
    })

}

function viewEmployeesRoles () {
    db.findAllRoles()
    .then(([rows]) => {
        let roles= rows
        console.table(roles)
    })
}

function viewEmployeesDepartments () {
    db.findAllDepartments()
    .then(([rows]) => {
        let department = rows
        console.table(department)
    })
}

function addEmployeeTable() {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "Enter First Name:",
            },
            {
                name: "lastName",
                type: "input",
                message: "Enter Last Name:",
            },
            {
                name: "roleId",
                type: "input",
                message: "Enter Role Id:",
            },
            {
                name: "managerId",
                type: "input",
                message: "Enter Manager Id:",
            },
        ])
        
        .then((answer) => {
            db.connection.query(
                `INSERT INTO employee SET ?`,
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.roleId,
                    manager_id: answer.managerId,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("Added New Employee!");
                    
                }
            );
        });
}