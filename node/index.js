const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const table = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id));`;
connection.query(table);

const sql = `INSERT INTO people(name) values('afranca');`;
connection.query(sql);

connection.end();

app.get('/', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection(config);

    connection.query('SELECT * FROM people', (err, rows) => {
        if (err) throw err;

        var row = "";
        var msg = `<h1>Full Cycle Rocks!</h1></br</br>`;

        for (var i in rows) {
            row = `<h3>${rows[i].name}</h3>`
            msg = msg + row;
        }

        res.send(msg);
    });

    connection.end()
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
})