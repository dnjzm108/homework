const sql = require('./dbtest.js');

 Task.getAllTask = function(result) {
    sql((err, connection) => {
      if (err) {
        console.log('connection error', error);
        result(err, null);
      }
      connection.query('Select * from tasks', function(e, res) {
        if (e) {
          console.log('error: ', e);
          result(e, null);
        } else {
          console.log('tasks : ', res);
  
          result(null, res);
        }
      });
      connection.release();
    });
  };