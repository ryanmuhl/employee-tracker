// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // {TODO: Add your MySQL password}
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the inventory_db database.`)
);

