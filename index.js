
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
                   value: "VIEWEMPLOYEES"
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
        }
    })
    



function viewEmployees () {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows
        console.table(employees)
    })
}
