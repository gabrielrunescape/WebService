import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'gabriel435',
    port: '3306',
    database: 'WebPonto_Develop'
});

export default connection;
