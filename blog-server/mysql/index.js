const mysql = require('mysql')
const config = require('./config')
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})
class Mysql {
  constructor() {
  }
  query() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from articals', function (error, results, fields) {
        if (error) {
          throw error
        };
        console.log(fields);
        resolve(results)
      });
    })
  }
}

module.exports = new Mysql()