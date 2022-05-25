
const db = require('./db');
const inquirer = require('inquirer');
const cTable = require('console.table');

init ();

function init () {
    queries ();
}

function queries() {
    inquirer.prompt([
       {
           type: "list",
           name: "choice",
           message: "Select Employee Information",
           choices: [
               {
                   name: "View all employees",
                   value: "VIEWEMPLOYEES",
               },
               {
                   name: "View all roles",
                   value: "VIEWALLROLES",

               },
               {
                name: "View all departments",
                value: "VIEWALLDEPARTMENTS",

            },
            {
                name: "Add employee",
                value: "ADDEMPLOYEE"
            },
            {
                name: "Update employee role",
                value: "UPDATEEMPLOYEE"
            },
            {
                name: "Add role",
                value: "ADDROLE"
            },
            {
                name: "Add department",
                value: "ADDDEPARTMENT"
            },
            {
                name: "Quit",
                value: "QUIT"
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
            break;
            case "UPDATEEMPLOYEE":
            updateEmployeeTable()
            break;
            case "ADDROLE":
            addRole()
            break;
            case "ADDDEPARTMENT":
            addDepartment()
            break;
            case "QUIT":
            quit()
        }
    })
}

    
   
function viewEmployees () {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows
        console.table(employees)
    }).then (() => queries()) 

}

function viewEmployeesRoles () {
    db.findAllRoles()
    .then(([rows]) => {
        let roles= rows
        console.table(roles)
    }).then (() => queries()) 
}

function viewEmployeesDepartments () {
    db.findAllDepartments()
    .then(([rows]) => {
        let department = rows
        console.table(department)
    }).then (() => queries()) 
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
        }).then (() => queries()) 
}

function updateEmployeeTable () {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows
        const employeeChoices = employees.map(({employee_id, first_name, last_name}) => ({
            name: `${first_name}${last_name}`,
            value: employee_id,
        }))

        inquirer.prompt([
            {
                name: "employeeid",
                type: "list",
                message: "Which Employee Role Would You Like To Update?",
                choices: employeeChoices
            }
        ]).then(res => {
            let employeeid = res.employeeid
            console.log(res)
            db.findAllRoles()
            .then(([rows]) => {
                let roles =rows
                const roleChoices = roles.map(({role_id, role_title}) => ({
                    name: role_title,
                    value: role_id
                }))
                inquirer.prompt([
                    {
                        name: "roleid",
                        type: "list",
                        message: "Which Roll Would You Like The Employee To Have?",
                        choices: roleChoices
                    }

                ]).then((res) => {db.updateEmployeeData(res.roleid, employeeid )
                    console.log(res, employeeid)})
                .then(()=> console.log ("Updated Employees Role"))
                .then(() => queries())
            })
        })
    });
}

function addRole () {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows
        const departmentChoices = departments.map(({id, names} )=> ({
            name: names,
            value: id,
    
        }))
        inquirer.prompt ([
            {
                name: "title",
                message: "What is the name of this role?"
            },
            {
                name: "salary",
                message: "What is the employee's salary?"
            },
            {
                type: "list",
                name: "department_id",
                message: "Which department does this role belong to?",
                choices: departmentChoices
            },
        ]).then(role => {
            db.createRole(role)
            .then(() => queries())
        })
    })

}

function addDepartment () {
    inquirer.prompt([
        {
            name: "names",
            message: "what is the name of the Department?"
        },

    ]).then(department => {
        db.createDepartment(department)
        .then(() => queries())
    })
}

function quit () {
    process.exit();
}