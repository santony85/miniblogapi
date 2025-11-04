var connection = mysql.createConnection({
    host     : '192.168.4.1',
    user     : 'sqlasantero',
    password : 'savary',
    database : 'asantero_miniblog',
    ssl  : {
      rejectUnauthorized: false
    }
  });