const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'mysql-container', // The container name for the MySQL database
    user: 'testuser',
    password: 'testpass',
    database: 'testdb'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');

    // Run a query
    connection.query('SELECT "Connection Successful!" AS message', (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }
        console.log('Query result:', results[0].message);
        connection.end();
    });
});
