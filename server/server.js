const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ams_native'
});

connection.connect()

function check() {
  connection.query("select * from tbl_disposisi", function(error, results, fields) {
    console.log(results.length);
  })
}

setInterval(check, 1000);